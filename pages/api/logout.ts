import { serialize } from "cookie";

export default (req, res) => {
  const cookie = serialize("token", "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
  res.json({ loggedOut: true });
};
