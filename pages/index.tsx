import { useState } from "react";

const Page = ({ feed: initialFeed }) => {
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState(initialFeed);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFeed([{ text: input, author: "" }, ...feed]);
          const res = fetch(`http://localhost:3000/api/tweet/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: input }),
          });
          setInput("");
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </form>
      <div>
        {feed.map((tweet, i) => (
          <div key={i}>
            <h4>{tweet.text}</h4>
            <span>{tweet.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Page.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/feed");
  const json = await res.json();
  return { feed: json };
};

export default Page;
