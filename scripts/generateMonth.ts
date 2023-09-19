import dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";
import { Configuration, CreateChatCompletionResponse } from "openai";
import z from "zod";
import { TypeSafeOpenAIApi } from "typesafe-openai";
import { generateImage, slugify } from "./generateImage";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Get current month
const month = new Date().getMonth() + 1;
const monthName = new Date().toLocaleString("default", { month: "long" });

// Get current year
const year = new Date().getFullYear();
const openai = new TypeSafeOpenAIApi(configuration);

const run = async () => {
  console.log(`Generating snacks for ${monthName} ${year}`);
  const snacks = await openai.createChatCompletionTypeSafe({
    messages: [
      {
        role: "user",
        content: `Generate a list of fun and unique snacks for the month of ${monthName}. There must be one snack for every day of the month.`,
      },
    ],
    model: "gpt-4-0613",
    functionForce: {
      name: "generateSnacks",
      description: "Generate a list of snacks snacks",
      parameters: z.object({
        snacks: z.array(
          z
            .object({
              name: z.string().describe("The name of the snack."),
              description: z.string().describe("A description of the snack."),
            })
            .describe("A list of snacks for a given month.")
        ),
      }),
    },
  });

  console.dir(snacks, { depth: null });

  const extendedSnacks = await Promise.all(
    snacks.snacks.map(async (snack) => {
      let img: string | undefined;
      let markdownPath: string | undefined;
      // TODO: refactor this to not wait for the image to be generated before recipe is generated
      try {
        img = await generateImage(snack.name, openai);
      } catch (e) {
        console.error("Error generating image for", snack.name);
        console.error(e);
      }
      try {
        const recipe = await openai.createChatCompletion({
          messages: [
            {
              role: "user",
              content: `Generate a recipe for ${snack.name}. Please include the ingredients and instructions. Only respond with the recipe in markdown format.`,
            },
          ],
          model: "gpt-3.5-turbo",
        });
        const choices = recipe?.data?.choices || [];
        const markdownContent =
          choices[choices.length - 1]?.message?.content || "";
        console.log({ markdownContent });
        if (!markdownContent)
          console.error("No markdown content found for", snack.name);
        markdownPath = path.join(
          process.cwd(),
          "content",
          "recipes",
          `${slugify(snack.name)}.md`
        );
        await fs.writeFile(markdownPath, markdownContent);
      } catch (e) {
        console.error("Error generating recipe for", snack.name);
        console.error(e);
        markdownPath = undefined;
      }

      return {
        ...snack,
        image: img || "",
        recipe: `${slugify(snack.name)}.md` || "",
      };
    })
  );

  await fs.writeFile(
    path.join(
      __dirname,
      "../",
      "content",
      "snacks",
      year.toString(),
      `${month - 1}.json`
    ),
    JSON.stringify({ snacks: extendedSnacks }, null, 2)
  );
};

run();
