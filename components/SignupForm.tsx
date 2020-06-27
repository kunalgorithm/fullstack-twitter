import { Row, Col, Button, message, Input } from "antd";
import { useState } from "react";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";
export const SignupForm = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Row>
      <Col>
        <h3>Sign up</h3>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (username.length === 0 || password.length === 0) {
              message.error(
                "Uh oh: you can't have a blank username or password."
              );
            }
            setLoading(true);
            const { data, error } = await fetcher(
              `/api/${login ? "login" : "signup"}`,
              {
                username,
                password,
              }
            );
            if (error) {
              message.error(error);
              setLoading(false);
              return;
            }
            await mutate("/api/me");
          }}
        >
          <div>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="name"
              placeholder="Username"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <Button htmlType="submit" loading={loading}>
              {login ? "Login" : "Sign up"}
            </Button>
          </div>
          <div>
            <a onClick={() => setLogin(!login)}>
              {login ? "New? Sign Up" : "Already a user? Log In"}
            </a>
          </div>
        </form>
      </Col>
    </Row>
  );
};
