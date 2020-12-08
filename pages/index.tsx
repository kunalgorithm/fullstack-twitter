import { Col, Row, Divider } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateTweetForm } from "../components/CreateTweetForm";
import Head from "next/head";
const Page = () => (
  <Row>
    <Head>
      <title>Fullstack Twitter Clone</title>
    </Head>
    <Col md={{ span: 6, offset: 2 }} xs={{ span: 12, offset: 2 }}>
      <Profile />
      <Divider />
      <a href="https://github.com/kunalgorithm/fullstack-twitter">
        View Source on Github
      </a>
    </Col>
    <Col md={{ span: 10 }} xs={{ span: 20, offset: 2 }}>
      <CreateTweetForm />
      <Feed />
    </Col>
  </Row>
);
export default Page;
