import { mkdirSync, writeFileSync } from "node:fs";

const partA = "My uncle, after I totaled his truck on an icy road, handed me the tow bill and said, \"Own the wreck";
const partB = " before you explain the weather\".";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
