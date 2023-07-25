import { promises as fs } from "fs";
import path from "path";
import { OpenAIApi } from "openai";
import axios from "axios";

export const slugify = (text: string) =>
  text.replace(/\s+/g, "-").toLowerCase();

async function downloadImage(url: string, filename: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  fs.writeFile(filename, response.data);
}
export const generateImage = async (prompt: string, openai: OpenAIApi) => {
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  if (!image_url) throw new Error("No image url found");

  const fileName = `${slugify(prompt)}.png`;
  const fullPath = path.join(process.cwd(), "public", "img", fileName);
  await downloadImage(image_url, fullPath);
  return "/img/" + fileName;
};
