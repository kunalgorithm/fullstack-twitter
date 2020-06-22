import { Button, message } from "antd";
export const CreateTweetForm = ({ feed, setFeed, input, setInput }) => {
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (input.length < 1) {
          message.error("Oops! You can't create empty tweets.");
          return;
        }
        setFeed([{ text: input, author: "" }, ...feed]);
        fetch(`http://localhost:3000/api/tweet/create`, {
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
      <Button htmlType="submit">Tweet</Button>
    </form>
  );
};
