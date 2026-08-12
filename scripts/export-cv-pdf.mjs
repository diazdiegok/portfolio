import { chromium } from "playwright";
import { join } from "node:path";

const html = join(process.cwd(), "public", "cv.html");
const pdf = join(process.cwd(), "public", "cv.pdf");
const docsPdf = "C:/Users/diego/Documents/DIEGO NICOLAS DIAZ - CV.pdf";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file:///${html.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
await page.pdf({
  path: pdf,
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await page.pdf({
  path: docsPdf,
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
console.log("saved", pdf, docsPdf);
