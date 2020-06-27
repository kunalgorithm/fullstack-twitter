import { Card, Spin } from "antd";
import { useFeed, useMe } from "./util/hooks";
import { DeleteTweetButton } from "./DeleteTweetButton";

export const Feed = () => {
  const { feed } = useFeed();
  const { me } = useMe();

  return feed ? (
    <>
      {feed.map((tweet, i) => (
        <Card key={i}>
          {me && tweet.author.id === me.id && (
            <DeleteTweetButton tweet={tweet} feed={feed} />
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
