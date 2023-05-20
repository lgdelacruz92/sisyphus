import * as fs from "fs";
import * as path from "path";

export function createFileStructure(folder: string, name: string) {
  const folderPath = path.join("src", folder, name);
  const indexPath = path.join(folderPath, "index.ts");
  const componentPath = path.join(folderPath, `${name}.tsx`);
  const testPath = path.join(folderPath, `${name}.test.tsx`);

  fs.mkdirSync(folderPath, { recursive: true });

  fs.writeFileSync(indexPath, "", "utf-8");
  fs.writeFileSync(componentPath, "", "utf-8");
  fs.writeFileSync(testPath, "", "utf-8");
}
