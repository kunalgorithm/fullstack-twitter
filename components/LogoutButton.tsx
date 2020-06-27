import { Button, message } from "antd";
import { mutate } from "swr";
import { fetcher } from "./util/fetcher";
import { useState } from "react";
export const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      loading={loading}
      onClick={async () => {
        setLoading(true);
        const { data, error } = await fetcher("/api/logout");
        if (error) {
          message.error(error);
          setLoading(false);
          return;
        }
        await mutate("/api/me");
      }}
    >
      Log Out
    </Button>
  );
};
