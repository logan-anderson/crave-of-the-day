import dotenv from "dotenv";
import { promises as fs } from "fs";
import { Configuration } from "openai";
import { TypeSafeOpenAIApi } from "typesafe-openai";
import axios from "axios";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new TypeSafeOpenAIApi(configuration);

async function downloadImage(url: string, filename: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  fs.writeFile(filename, response.data);
}

const run = async () => {
  const prompt = "Mango Chili Fruit Roll-Ups";
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  if (!image_url) throw new Error("No image url found");

  console.log({ image_url });
  const fileName = `${prompt.toLocaleLowerCase().replace(" ", "-")}.png`;
  await downloadImage(image_url, fileName);
};

run();
