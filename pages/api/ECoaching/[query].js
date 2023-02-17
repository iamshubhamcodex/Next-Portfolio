import User from "@/Model/ECoaching/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { method, query, body } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      switch (query.query) {
        case "add":
          try {
            res.json(body);
            const user = new User(body);
            const savedUser = await user.save();
            // sendMail function goes here. Parameter = body.email;
            res.status(201).json({ success: true, user: savedUser });
          } catch (error) {
            console.log(error);
            res.json({
              success: false,
              error: "Some Internal Error Occured while adding your task",
            });
          }

        case "get":
          let admin = body.email === "root@admin";
          let data = admin ? await User.find() : await User.find(body);
          if (data.length > 0) {
            res.json({ admin: admin, success: true, user: data });
          } else res.send({ success: false, error: "No Credential Found" });
      }
  }
}
