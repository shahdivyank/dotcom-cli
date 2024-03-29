import { resolve, join } from "path";
import fs from "fs";

export const create = (name, path, cwd) => {
  const destination = join(resolve(cwd, path), name);
  const copyFrom = join(cwd, "/templates/python");

  if (fs.existsSync(destination)) {
    throw new Error("Project already exists");
  }
  try {
    fs.mkdirSync(destination, { recursive: true });
    fs.cpSync(copyFrom, destination, {
      recursive: true,
    });
  } catch (e) {
    throw new Error("Fail init project");
  }
};
