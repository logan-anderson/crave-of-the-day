import path from "path";
import { promises as fs } from "fs";
import { snackFileSchema } from "./schema";
import { MONTHS } from "./constants";

type SnackListArgs = {
  month: string | number;
  year: string | number;
  filter: boolean;
  filterDay?: string | number;
};

export class SnackModel {
  contentPath: string;
  constructor(args?: { rootPath?: string }) {
    const rootPath = args?.rootPath || process.cwd();
    this.contentPath = path.join(rootPath, "content");
  }

  async getValidMonths({
    year,
    filter,
  }: {
    year: number | string;
    filter?: boolean;
  }) {
    try {
      const months = (
        await fs.readdir(path.join(this.contentPath, "snacks", year.toString()))
      )
        .map((x) => {
          return Number(x.replace(".json", ""));
        })
        .map((x) => ({ val: x, label: MONTHS[x] }));
      if (!filter) {
        return months;
      }
      const currentMonth = new Date().getUTCMonth();
      return months.filter((x) => x.val <= currentMonth);
    } catch (error) {
      return [];
    }
  }

  async getSnackList(args: SnackListArgs) {
    const { month, year, filter } = args;
    try {
      const rawJson = JSON.parse(
        await fs.readFile(
          path.join(
            this.contentPath,
            "snacks",
            year.toString(),
            `${month}.json`
          ),
          "utf8"
        )
      );
      const snacks = snackFileSchema.parse(rawJson);
      if (!filter) {
        return snacks;
      }
      const filterDay = args.filterDay || new Date().getUTCDate();
      const allSnacks = snacks.snacks.filter((_, i) => i < Number(filterDay));
      return { snacks: allSnacks };
    } catch (error) {
      console.info(error);
      return null;
    }
  }
}

export const snackClient = new SnackModel();
