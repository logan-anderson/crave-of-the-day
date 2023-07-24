import dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";
import { Configuration } from "openai";
import z from "zod";
import { TypeSafeOpenAIApi } from "typesafe-openai";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Get current month
const month = new Date().getMonth() + 1;
const openai = new TypeSafeOpenAIApi(configuration);

const run = async () => {
  const snacks = await openai.createChatCompletionTypeSafe({
    messages: [
      {
        role: "user",
        content:
          "Generate a list of fun and unique snacks for the month of August. There must be one snack for every day of the month.",
      },
    ],
    model: "gpt-3-0613",
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
  await fs.writeFile(
    path.join(__dirname, "../", "content", "snacks", `${month}.json`),
    JSON.stringify(snacks, null, 2)
  );
};

run();
