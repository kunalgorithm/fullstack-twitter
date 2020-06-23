import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (!req.body || !req.body.text) {
    res.status(400).json({ error: "❌ Tweets cannot be empty " });
    return;
  }
  const { text, username } = req.body;

  const tweet = await prisma.tweet.create({
    data: { text, author: { connect: { username } } },
  });

  res.json(tweet);
};
