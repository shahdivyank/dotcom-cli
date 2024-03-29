import { execSync } from "child_process";
import { join } from "path";

export const initgit = (name, path) => {
  const cwd = join(path, name);
  execSync("git init", { cwd: cwd, stdio: "ignore" });
  execSync("git checkout -b main", { cwd: cwd, stdio: "ignore" });
  execSync("git add -A", { cwd: cwd, stdio: "ignore" });
  execSync('git commit -m "Initial commit"', { cwd: cwd, stdio: "ignore" });
  return true;
};
