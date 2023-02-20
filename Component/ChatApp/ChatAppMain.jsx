import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";
import { io } from "socket.io-client";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/CSS/ChatApp/ChatApp.module.css";

let socket;
export default function ChatAppMain() {
  let { selectedChat, getChat, userD, updateChat, refresh, setRefresh } =
    useContext(ChatAppContext);
  const [chatScreenDetails, setChatScreenDetails] = useState();
  const [socketMsg, setSocketMsg] = useState(false);
  const [chatDetails, setChatDetails] = useState();
  const [chats, setChats] = useState([]);
  const send = useRef();

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("update", (msg) => {
      if (userD !== null)
        if (userD.email === msg.to) {
          setMessages();
        }
    });
  };

  async function getChatDetails(id) {
    let res = await getChat(id);
    if (res.bool && res.chat) {
      setChats(res.chat.chats);
      setChatDetails(res.chat);
      setTitle(res.chat.users);
    }
  }
  function setTitle(arr) {
    for (let a of arr)
      if (a.email !== userD.email)
        setChatScreenDetails({ ...chatScreenDetails, title: a.name });
  }
  async function sendUpdate(e) {
    let cont = send.current.value;
    send.current.value = "";
    if (cont !== "") {
      await updateChat(selectedChat.chatId, {
        from: userD.email,
        content: cont,
      });
      await getChatDetails(selectedChat.chatId);
      let to;
      for (let a of chatDetails.users)
        if (a.email !== userD.email) to = a.email;
      socket.emit("sent", { from: userD.email, to: to, msg: cont });
    }
  }
  function setMessages() {
    setSocketMsg(true);
  }
  function handleChange(e) {
    e.preventDefault();
    sendUpdate();
  }

  useEffect(() => {
    getChatDetails(selectedChat.chatId);
    setSocketMsg(false);
    setRefresh(false);
  }, [selectedChat, refresh, socketMsg]);
  useEffect(() => {
    if (userD !== null) socketInitializer();
  }, []);

  return (
    <>
      {selectedChat.chatId && (
        <div className={styles.main}>
          <h1>{chatScreenDetails && chatScreenDetails.title}</h1>
          <div className={styles.chats}>
            <div className={styles.msgCont}>
              {chats &&
                chats.map((k, i) => {
                  return (
                    <div key={i} className={styles.msg}>
                      <p
                        className={
                          k.from === userD.email ? styles.right : styles.left
                        }
                      >
                        {k.content}
                      </p>
                    </div>
                  );
                })}
            </div>
            <form onSubmit={handleChange} className={styles.sendCont}>
              <input type="text" ref={send} />
              <p type="submit" className={styles.send} onClick={sendUpdate}>
                <i className="fa-solid fa-paper-plane"></i>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
