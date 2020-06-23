import { Card } from "antd";
import { useFeed } from "../util/hooks";

export const Feed = () => {
  const { feed } = useFeed();
  return feed ? (
    <>
      {feed.map((tweet, i) => (
        <Card key={i}>
          <h4>{tweet.text}</h4>
          <span>{tweet.author.username}</span>
        </Card>
      ))}
    </>
  ) : null;
};
