import { Card, Spin } from "antd";
import { useFeed, useMe } from "./util/hooks";
import { DeleteButton } from "./DeleteButton";

export const Feed = () => {
  const { feed } = useFeed();
  const { me } = useMe();

  return feed ? (
    <>
      {feed.map(({ id, author, text }, i) => (
        <Card key={i}>
          {me && author.id === me.id && <DeleteButton id={id} feed={feed} />}
          <h4>{text}</h4>
          <span>{author.username}</span>
        </Card>
      ))}
    </>
  ) : (
    <Spin />
  );
};
