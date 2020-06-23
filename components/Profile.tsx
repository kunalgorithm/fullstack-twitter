import { Row, Col, Button } from "antd";
import { Signup } from "./Signup";

import { fetcher } from "../util/fetcher";
import useSWR, { mutate } from "swr";

export const Profile = () => {
  const { data: me, error } = useSWR("/api/me", fetcher);
  return (
    <Row>
      {me && me.username ? (
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
      ) : (
        <Signup />
      )}
    </Row>
  );
};
