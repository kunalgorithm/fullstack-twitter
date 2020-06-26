import { Row, Col, Button, message } from "antd";
import { Signup } from "./Signup";
import { mutate } from "swr";
import { useMe } from "./util/hooks";
import { fetcher } from "./util/fetcher";
import { useState } from "react";

export const Profile = () => {
  const { me } = useMe();
  const [loading, setLoading] = useState(false);
  if (!me) return null;

  return (
    <Row style={{ padding: "1.5rem" }}>
      {!me.username ? (
        <Signup />
      ) : (
        <Col>
          Logged in as: <strong>{me.username}</strong>
          <br />{" "}
          <Button
            loading={loading}
            onClick={async () => {
              setLoading(true);
              const { data, error } = await fetcher("/api/logout");
              if (error) {
                message.error(error);
                setLoading(false);
                return;
              }
              await mutate("/api/me");
            }}
          >
            Log Out
          </Button>
        </Col>
      )}
    </Row>
  );
};
