import { useState } from "react";
import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateTweetForm } from "../components/CreateTweetForm";

const Page = ({ feed: initialFeed, me }) => {
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState(initialFeed);
  return (
    <Row>
      <Col md={{ span: 6, offset: 2 }}>
        <Profile />
      </Col>
      <Col md={{ span: 10 }}>
        <CreateTweetForm
          feed={feed}
          setFeed={setFeed}
          input={input}
          setInput={setInput}
        />
        <Feed feed={feed} />
      </Col>
    </Row>
  );
};

// TODO change from getinitialprops in the tutorial
export async function getServerSideProps() {
  const feedData = await fetch("http://localhost:3000/api/feed");
  const feed = await feedData.json();

  return { props: { feed } };
}

export default Page;
