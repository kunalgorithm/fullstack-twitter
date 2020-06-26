import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateTweetForm } from "../components/CreateTweetForm";
import Head from "next/head";
export default () => (
  <Row>
    <Head>
      <title>Fullstack Twitter Clone</title>
    </Head>
    <Col md={{ span: 6, offset: 2 }} xs={{ span: 12, offset: 2 }}>
      <Profile />
    </Col>
    <Col md={{ span: 10 }} xs={{ span: 20, offset: 2 }}>
      <CreateTweetForm />
      <Feed />
    </Col>
  </Row>
);
