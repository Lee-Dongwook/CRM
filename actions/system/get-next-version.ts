import fs from "fs";
export default async function getNextVersion() {
  try {
    const data = fs.readFileSync("package.json", "utf8");

    try {
      const packageJson = JSON.parse(data);
      const version = packageJson.dependencies["next"];

      return version;
    } catch (error) {
      console.error("Error parsing package.json:", error);
      return "0";
    }
  } catch (error) {
    console.error("Error reading package.json:", error);
  }
}
