import { Button } from "antd";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";

export const DeleteTweetButton = ({ tweet, feed }) => (
  <Button
    style={{ float: "right" }}
    danger
    type="dashed"
    onClick={async () => {
      await fetcher("/api/tweet/delete", { id: tweet.id });
      await mutate(
        "/api/feed",
        feed.filter((t) => t.id !== tweet.id)
      );
    }}
  >
    x
  </Button>
);
