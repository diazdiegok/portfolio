import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const html = join(process.cwd(), "public", "cv.html");
const pdf = join(process.cwd(), "public", "cv.pdf");
const docsPdf = "C:/Users/diego/Documents/DIEGO NICOLAS DIAZ - CV.pdf";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file:///${html.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });

for (const out of [pdf, docsPdf]) {
  await page.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
}

await browser.close();

const bytes = readFileSync(pdf);
const matches = [...bytes.toString("latin1").matchAll(/\/Type\s*\/Page\b/g)];
const pageCount = matches.length;
console.log("saved", pdf, docsPdf, "pages:", pageCount);

if (pageCount > 1) {
  process.exitCode = 1;
}
