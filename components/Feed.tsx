import { Card, Spin, Button } from "antd";
import { useFeed, useMe } from "./util/hooks";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";

export const Feed = () => {
  const { feed } = useFeed();
  const { me } = useMe();

  return feed ? (
    <>
      {feed.map((tweet, i) => (
        <Card key={i}>
          {tweet.author.id === me.id && (
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
          )}
          <h4>{tweet.text}</h4>
          <span>{tweet.author.username}</span>
        </Card>
      ))}
    </>
  ) : (
    <Spin />
  );
};
