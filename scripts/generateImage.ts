import { promises as fs } from "fs";
import path from "path";
import OpenAI from "openai";
import axios from "axios";

export const slugify = (text: string) =>
  text.replace(/\s+/g, "-").toLowerCase();

async function downloadImage(url: string, filename: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  fs.writeFile(filename, response.data);
}
export const generateImage = async (prompt: string, openai: OpenAI) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data[0].url;
  if (!image_url) throw new Error("No image url found");

  const fileName = `${slugify(prompt)}.png`;
  const fullPath = path.join(process.cwd(), "public", "img", fileName);
  await downloadImage(image_url, fullPath);
  return "/img/" + fileName;
};
