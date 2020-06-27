import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
export default async (req, res) => {
  const prisma = new PrismaClient();

  const { token } = req.cookies;

  if (token) {
    // Get authenticated user
    const { _id, username } = jwt.verify(token, process.env.JWT_SECRET);
    const { text } = req.body;

    const tweet = await prisma.tweet.create({
      data: { text, author: { connect: { username } } },
    });
    res.json(tweet);
  } else {
    res.json({ error: "You must be logged in to tweet." });
  }
};
