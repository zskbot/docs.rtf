import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = "_site";
const publicPages = ["index.html", "studio.html", "404.html"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of publicPages) {
  await copyFile(file, `${outputDirectory}/${file}`);
}

await writeFile(`${outputDirectory}/.nojekyll`, "");
console.log(`Prepared Pages artifact with only: ${publicPages.join(", ")}`);
