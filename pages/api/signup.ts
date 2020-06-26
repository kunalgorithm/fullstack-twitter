import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const { username, password } = req.body;
  let user;
  try {
    user = await prisma.user.create({
      data: {
        username,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (error) {
    res.json({ error: "A user with that username already exists 😮" });
    return;
  }
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
  return;
};
