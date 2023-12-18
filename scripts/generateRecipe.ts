import dotenv from "dotenv";
dotenv.config();

import { TypeSafeOpenAIApi } from "typesafe-openai";
const openai = new TypeSafeOpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

const run = async () => {
  const recipe = await openai.chat.completions.create({
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
  const choices = recipe?.choices || [];
  console.log(choices[choices.length - 1]?.message);
};

run();
