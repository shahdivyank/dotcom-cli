#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const program = new Command();

program
  .command("init")
  .description("Create a New Project")
  .argument("<string>", "Project Name")
  .action((project) => {
    const destination = `./${project}`;
    fs.mkdir(destination, () => {});
    fs.cp(
      `${__dirname}/templates/python/`,
      destination,
      { recursive: true },
      () => {}
    );
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
