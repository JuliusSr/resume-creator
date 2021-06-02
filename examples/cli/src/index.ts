import fs from 'fs';
import yargs from 'yargs';
import { saveResumeToFile } from '@resume-creator/renderer';
import { Locale } from '@resume-creator/types';

// enforce typing on locales
const locales: Record<string, Locale> = {
  en: "en-US",
  it: "it-IT"
}

// handle arguments
const argv = yargs
  .option("data", {
    alias: "d",
    description: "absolute path to data file",
    type: "string"
  })
  .option("out", {
    alias: "o",
    description: "output directory",
    type: "string"
  })
  .option("name", {
    alias: "n",
    description: "name for the target pdf file",
    type: "string"
  })
  .option("lang", {
    alias: "l",
    description: "target language",
    choices: Object.keys(locales),
    default: "en"
  })
  .demandOption("data")
  .help().alias("help", "h")
  .argv;

// read arguments and apply defaults if optional args are not provided
const pathToData: string = argv.data;
const dataDirectory: string = pathToData.substr(0, pathToData.lastIndexOf("/"));
const outputDirectory: string = argv.out || dataDirectory;
const filename: string = argv.name || "resume";
const locale: Locale = locales[argv.lang]

// read resume data from file
const resume = JSON.parse(fs.readFileSync(pathToData, 'utf8'));

// create resume and save to file
saveResumeToFile(
  outputDirectory,
  filename,
  resume,
  locale
).then(() => {
  console.log("resume successfully created");
  process.exit(0)
}).catch(err => {
  console.error("error creating resume", err);
  process.exit(1);
});
