import { Row, Col, Button, message } from "antd";
import { useState } from "react";
import { mutate } from "swr";
export const Signup = ({}) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <Row>
      <Col>
        <h3>Sign up</h3>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await fetch(
              `http://localhost:3000/api/${login ? "login" : "signup"}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              }
            );
            const { data, error } = await res.json();
            if (error) message.error(error);
            mutate("/api/me");
          }}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="name"
            placeholder="Username"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button htmlType="submit">{login ? "Login" : "Sign up"}</Button>
          <div>
            <a onClick={() => setLogin(true)}>Already a user? Log In</a>
          </div>
        </form>
      </Col>
    </Row>
  );
};
