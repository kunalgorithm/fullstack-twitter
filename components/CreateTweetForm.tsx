import { Button, message } from "antd";
import useSWR, { mutate } from "swr";
import { fetcher } from "../util/fetcher";
import { User } from "@prisma/client";
export const CreateTweetForm = ({ feed, input, setInput }) => {
  const { data: me }: { data?: User } = useSWR("/api/me", fetcher);
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={async (e) => {
        e.preventDefault();
        if (input.length < 1) {
          message.error("Oops! You can't create empty tweets.");
          return;
        }
        // setFeed([{ text: input, author: "" }, ...feed]);
        await fetcher("/api/tweet/create", {
          text: input,
          username: me.username,
        });
        mutate("/api/feed", [{ text: input, author: me }, ...feed]);
        // fetch(`http://localhost:3000/api/tweet/create`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ text: input, username: me.username }),
        // });
        setInput("");
      }}
    >
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <Button htmlType="submit">Tweet</Button>
    </form>
  );
};
