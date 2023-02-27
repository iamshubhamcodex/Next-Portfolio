import dbConnect from "@/lib/dbConnect";
import Pass from "@/Model/PassManage/Pass";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    try {
      let pass = new Pass(body);
      let savedUser = await pass.save();
      res.json({ success: true, pass: savedUser });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding Pass" });
}
