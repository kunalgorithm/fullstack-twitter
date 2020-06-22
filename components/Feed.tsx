import { Card } from "antd";

export const Feed = ({ feed }) => {
  return feed.map((tweet, i) => (
    <Card key={i}>
      <h4>{tweet.text}</h4>
      <span>{tweet.author}</span>
    </Card>
  ));
};
