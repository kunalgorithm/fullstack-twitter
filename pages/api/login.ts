import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { username: user.username, id: user.id, time: new Date() },
      process.env.JWT_SECRET,
      {
        expiresIn: "6h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 6 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    res.json(user);
  } else {
    res.json({ error: "Incorrect username or password 🙁" });
    return;
  }
};
