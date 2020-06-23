import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (!req.body || !req.body.text) {
    res.status(400).json({ error: "❌ Tweets cannot be empty " });
    return;
  }
  const { text, author } = req.body;

  const tweet = author
    ? await prisma.tweet.create({ data: { text } })
    : await prisma.tweet.create({ data: { text } });
  res.json(tweet);
};
