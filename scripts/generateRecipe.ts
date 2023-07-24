import dotenv from "dotenv";
dotenv.config();

import { Configuration } from "openai";
import { TypeSafeOpenAIApi } from "typesafe-openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new TypeSafeOpenAIApi(configuration);

const run = async () => {
  const recipe = await openai.createChatCompletion({
    messages: [
      {
        role: "user",
        content:
          "Generate a recipe for Pineapple Coconut Macaroons. Please include the ingredients and instructions. Only respond with the recipe in markdown format.",
      },
    ],
    model: "gpt-3.5-turbo",
  });
  console.dir(recipe, { depth: null });
  const choices = recipe.data?.choices || [];
  console.log(choices[choices.length - 1]?.message);
};

run();
