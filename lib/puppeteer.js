import puppeteer from "puppeteer";
let puPage = global.puPage;

async function initPup() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { browser, page };
}

if (!puPage) {
  puPage = global.puPage = initPup();
}
export default puPage;
