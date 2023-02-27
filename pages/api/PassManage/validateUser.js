import dbConnect from "@/lib/dbConnect";
import Pass from "@/Model/PassManage/Pass";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    try {
      let user = await Pass.find(body);
      if (user[0]) res.json({ success: true, user: user[0] });
      else res.json({ success: false, error: "No Pass Found" });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding Pass" });
}
