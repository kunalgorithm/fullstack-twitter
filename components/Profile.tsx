import { Row, Col, Button } from "antd";
import { Signup } from "./Signup";
import { mutate } from "swr";
import { useMe } from "./util/hooks";
import { fetcher } from "./util/fetcher";

export const Profile = () => {
  const { me } = useMe();
  if (!me) return null;
  if (!me.username) return <Signup />;

  return (
    <Row style={{ padding: "1.5rem" }}>
      <Col>
        Logged in as: <strong>{me.username}</strong>
        <br />{" "}
        <Button
          onClick={async () => {
            fetcher("/api/logout");
            mutate("/api/me");
          }}
        >
          Log Out
        </Button>
      </Col>
    </Row>
  );
};
