import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();
  const { id } = req.body;

  const tweet = await prisma.tweet.delete({
    where: { id },
  });

  res.json(tweet);
  return;
};
