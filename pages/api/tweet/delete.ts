import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const { id } = req.body;

  const tweet = await prisma.tweet.delete({
    where: { id },
  });

  res.json(tweet);
  return;
};
