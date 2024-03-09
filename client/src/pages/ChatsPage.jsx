import { PrettyChatWindow } from "react-chat-engine-pretty";
import React from "react";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="aa9bccc3-dcb2-4f82-b6ee-caab85b46ff9"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
