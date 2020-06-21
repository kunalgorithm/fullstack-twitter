import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: "❌ Tweets cannot be empty " });
    return;
  }

  const tweet = await prisma.tweet.create({ data: { text: req.body.text } });
  res.json(tweet);
};
