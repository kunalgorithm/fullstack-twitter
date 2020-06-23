import { useState } from "react";
import { Col, Row } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateTweetForm } from "../components/CreateTweetForm";
import { fetcher } from "../util/fetcher";
import { Tweet } from "@prisma/client";
import useSWR from "swr";

const Page = ({}) => {
  const [input, setInput] = useState("");
  // const [feed, setFeed] = useState(initialFeed);
  const { data: feed }: { data?: Tweet[] } = useSWR("/api/feed", fetcher);
  return (
    <Row>
      <Col md={{ span: 6, offset: 2 }}>
        <Profile />
      </Col>
      <Col md={{ span: 10 }}>
        <CreateTweetForm feed={feed} input={input} setInput={setInput} />
        <Feed feed={feed} />
      </Col>
    </Row>
  );
};

// export async function getServerSideProps() {
//   const feed = await fetcher("/api/feed");
//   return { props: { feed } };
// }

export default Page;
