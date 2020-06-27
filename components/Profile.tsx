import { Row, Col } from "antd";
import { SignupForm } from "./SignupForm";
import { useMe } from "./util/hooks";
import { LogoutButton } from "./LogoutButton";

export const Profile = () => {
  const { me } = useMe();

  if (!me) return null;

  return (
    <Row style={{ padding: "1.5rem" }}>
      {!me.username ? (
        <SignupForm />
      ) : (
        <Col>
          Logged in as: <strong>{me.username}</strong>
          <br />
          <LogoutButton />
        </Col>
      )}
    </Row>
  );
};
