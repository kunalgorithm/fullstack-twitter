import { Row, Col, Button } from "antd";
import { Signup } from "./Signup";
import { mutate } from "swr";
import { useMe } from "./util/hooks";

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
            await fetch("http://localhost:3000/api/logout");
            mutate("/api/me");
          }}
        >
          Log Out
        </Button>
      </Col>
    </Row>
  );
};
