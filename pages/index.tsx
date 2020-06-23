import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateTweetForm } from "../components/CreateTweetForm";

export default () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 2 }}>
        <Profile />
      </Col>
      <Col md={{ span: 10 }}>
        <CreateTweetForm />
        <Feed />
      </Col>
    </Row>
  );
};
