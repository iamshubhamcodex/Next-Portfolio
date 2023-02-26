import puPage from "@/lib/puppeteer";
import fs from "fs";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);
  let path = `/Pdf/${body.name}.pdf`;

  if (method === "POST") {
    if (!fs.existsSync("public" + path)) {
      const page = await puPage;

      let st = await page.goto(body.url, { waitUntil: "networkidle0" });
      let status = st.status();
      console.log(status);
      await page.emulateMediaType("screen");
      const pdf = await page.pdf({
        path: "public" + path,
        margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
        printBackground: true,
        format: "A4",
      });
      await browser.close();
      console.log("file saved");
    }
    res.json({ success: false, path: path });
  } else res.json({ for: "downloading pdf" });
}
