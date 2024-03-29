#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { create } from "./util/init/create.js";
import { initgit } from "./util/init/git.js";

const program = new Command();

program
  .command("init")
  .description("Create a New Project")
  .argument("<string>", "Project Name")
  .action(async (project) => {
    const cwd = dirname(fileURLToPath(import.meta.url));
    const root = path.resolve();
    try {
      create(project, root, cwd);
      initgit(project, root);
    } catch (e) {
      console.log(e.message);
      console.log("aborting...");
    }
  });

program
  .command("run dev")
  .description("Run the Development Server")
  .option("-p, -port <number>", "Localhost Port")
  .action(async (_, options) => {
    const port = options.Port ?? 8000;
    execSync(`uvicorn main:app --reload --port ${port}`, { stdio: "inherit" });
  });

program.parse();
