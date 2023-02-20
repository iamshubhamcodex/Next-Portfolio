import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";
import styles from "@/CSS/ChatApp/ChatAppSidebar.module.css";
import { useContext, useEffect, useState } from "react";
import ChatAppMain from "./ChatAppMain";
import ChatAppNew from "./ChatAppNew";

export default function ChatAppSidebar() {
  let { userD, setSelectedChat, setRefresh } = useContext(ChatAppContext);
  const [newChat, setNewChat] = useState(false);

  const select = (k) => {
    setSelectedChat(k);
  };
  const getName = (obj) => {
    for (let o of obj.users) if (o.email !== userD.email) return o.name;
  };

  return (
    <>
      {newChat && <ChatAppNew close={setNewChat} />}
      <div className={styles.sidebar}>
        <div className={styles.new} onClick={() => setNewChat(true)}>
          New Chat
        </div>
        <hr />
        {userD &&
          userD.chats.map((k, i) => {
            return (
              <div
                onClick={() => {
                  select(k);
                }}
                key={i}
                className={styles.chat}
              >
                {getName(k)}
              </div>
            );
          })}
        <div onClick={() => setRefresh(true)} className={styles.chat}>
          Refresh
        </div>
      </div>
    </>
  );
}
