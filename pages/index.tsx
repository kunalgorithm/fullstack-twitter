import { useState } from "react";
import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { CreateTweetForm } from "../components/CreateTweetForm";

const Page = ({ feed: initialFeed }) => {
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState(initialFeed);
  return (
    <Row>
      <Col md={{ span: 10, offset: 8 }}>
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
Page.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/feed");
  const json = await res.json();
  return { feed: json };
};

export default Page;
