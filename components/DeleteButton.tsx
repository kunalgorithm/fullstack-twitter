import { Button } from "antd";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";

export const DeleteButton = ({ id, feed }) => (
  <Button
    style={{ float: "right" }}
    danger
    type="dashed"
    onClick={async () => {
      await fetcher("/api/tweet/delete", { id });
      await mutate(
        "/api/feed",
        feed.filter((t) => t.id !== id)
      );
    }}
  >
    x
  </Button>
);
