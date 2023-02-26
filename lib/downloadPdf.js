import puPage from "./puppeteer";

export default async function downloadPdf() {
  const page = puPage;
  const website_url =
    "https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/";

  await page.goto(website_url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  const pdf = await page.pdf({
    path: `result_url.pdf`,
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });
  await browser.close();
}
