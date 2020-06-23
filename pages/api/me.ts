import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const { token } = req.cookies;
  let me;

  if (token) {
    try {
      const { id, email } = jwt.verify(token, process.env.JWT_SECRET);
      me = await prisma.user.findOne({ where: { id } });
      console.log("me", me);
      res.json(me);
      return;
    } catch (error) {
      console.log("err", error);
      res.json({ error });
      return;
    }
  } else {
    console.log("407 not authd");
    res.json({ error: "not authorized" });
  }
};
