import { Button, message } from "antd";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";
import { useState } from "react";
import { useFeed, useMe } from "./util/hooks";

export const CreateTweetForm = () => {
  const [input, setInput] = useState("");
  const { feed } = useFeed();
  const { me } = useMe();
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={async (e) => {
        e.preventDefault();
        if (input.length < 1) {
          message.error("Oops! You can't create empty tweets.");
          return;
        }
        if (!me || !me.username) {
          message.error("You must be logged in to tweet.");
          return;
        }
        fetcher("/api/tweet/create", {
          text: input,
          username: me.username,
        });
        mutate("/api/feed", [{ text: input, author: me }, ...feed]);
        setInput("");
      }}
    >
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button htmlType="submit">Tweet</Button>
    </form>
  );
};
