import { createFileStructure } from "./create-file-structure";
import { Command } from "commander";

const program = new Command();

program
  .version("1.0.0")
  .description("App cli")
  .option("-p, --page [page]", "Create a page component files", "app")
  .option("-n, --name <name>", "Name of the component")
  .parse(process.argv);

const { page, name } = program.opts();
let folder = "";

switch (page) {
  case "page":
    folder = "";
    break;
  case "component":
    folder = "Components";
    break;
  default:
    break;
}
createFileStructure(folder, name);
console.log(`File structure created for ${name}`);
