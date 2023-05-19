import * as fs from "fs";
import * as path from "path";

function createFileStructure(name: string) {
  const folderPath = path.join("src", name);
  const indexPath = path.join(folderPath, "index.ts");
  const componentPath = path.join(folderPath, `${name}.tsx`);
  const testPath = path.join(folderPath, `${name}.test.tsx`);

  fs.mkdirSync(folderPath, { recursive: true });

  fs.writeFileSync(indexPath, "", "utf-8");
  fs.writeFileSync(componentPath, "", "utf-8");
  fs.writeFileSync(testPath, "", "utf-8");
}

const name = process.argv[2];
if (name) {
  createFileStructure(name);
  console.log(`File structure created for ${name}`);
} else {
  console.error("Please provide a name argument.");
}
