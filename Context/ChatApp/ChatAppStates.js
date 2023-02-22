// import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const ChatAppContext = createContext();

export default function ChatAppStates({ children }) {
  // const router = useRouter();
  const [mob, setMob] = useState(false);
  const [userD, setUserD] = useState(null);
  const [logged, setLogged] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const [refresh, setRefresh] = useState(false);

  // const host = "https://nextportfolio-mu.vercel.app/";
  const host = "http://localhost:3000/";

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUserD(JSON.parse(localStorage.getItem("user")));
    }
    if (Boolean(localStorage.getItem("loggedIn"))) setLogged(true);
    window.addEventListener("resize", () => {
      setAcc();
    });
    setAcc();
    //eslint-disable-next-line
  }, []);
  function setAcc() {
    setMob(window.innerWidth < 720);
  }
  const validateUser = async (userDetails) => {
    let response = await fetch(`${host}api/ChatApp/User/get`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    let data = await response.json();
    if (data.success && data.user.length > 0) {
      setLogged(true);
      setUserD(data.user[0]);
      return { bool: true, users: data.user };
    } else if (data.success && data.user.length === 0) {
      return { bool: false, error: "No Credential matched in Our Database" };
    } else {
      return { bool: false, error: "Idk" };
    }
  };
  const getUser = async (userDetails) => {
    let response = await fetch(`${host}api/ChatApp/User/get`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    let data = await response.json();
    if (data.success && data.user.length > 0) {
      return { bool: true, users: data.user };
    } else {
      return { bool: false, error: "Idk" };
    }
  };

  const createUser = async (userDetails) => {
    try {
      let response = await fetch(`${host}api/ChatApp/User/add`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
      let data = await response.json();
      if (data.success) {
        return { bool: true };
      } else {
        return { bool: false, error: data.error };
      }
    } catch (error) {
      console.log(error);
      return { bool: false, error: error };
    }
  };
  const updateUser = async (email, chatId, user1, user2) => {
    await fetch(`${host}api/ChatApp/User/update`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        chatId: chatId,
        user1: { name: user1.name, email: user1.email },
        user2: { name: user2.name, email: user2.email },
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
  };
  const createChat = async (user1, user2) => {
    let bodyContent = JSON.stringify({
      users: [
        {
          email: user1.email,
          name: user1.name,
        },
        {
          email: user2.email,
          name: user2.name,
        },
      ],
    });

    let response = await fetch(`${host}api/ChatApp/Chat/add`, {
      method: "POST",
      body: bodyContent,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    await updateUser(user1.email, data.chat._id, user1, user2);
    await updateUser(user2.email, data.chat._id, user1, user2);

    let response2 = await getUser({ email: userD.email });
    console.log(response2.users[0]);
    setUserD(response2.users[0]);
  };
  const getChat = async (chatId) => {
    let response = await fetch(`${host}api/ChatApp/Chat/get`, {
      method: "POST",
      body: JSON.stringify({
        chatId: chatId,
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    if (data.success) return { bool: true, chat: data.chat };
    else return { bool: false, error: "idk" };
  };
  const updateChat = async (chatId, chat) => {
    let response = await fetch(`${host}api/ChatApp/Chat/update`, {
      method: "POST",
      body: JSON.stringify({
        chatId: chatId,
        chat: { from: chat.from, content: chat.content },
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (!data.success) console.log(data.error);
  };

  return (
    <ChatAppContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        mob,
        setMob,
        userD,
        setUserD,
        logged,
        setLogged,
        validateUser,
        getUser,
        createUser,
        createChat,
        getChat,
        updateChat,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
}
