import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";
import styles from "@/CSS/ChatApp/ChatAppNew.module.css";
import { useContext, useRef, useState } from "react";

export default function ChatAppNew({ close }) {
  let { getUser, userD, createChat, getChat } = useContext(ChatAppContext);
  const [resUser, setResUser] = useState();
  let inp = useRef();

  const handleChange = async () => {
    let input = inp.current.value;
    let res = await getUser({ email: input });
    if (res.users && res.users[0].email !== userD.email) {
      setResUser(res.users[0]);
      // if (res.users.email === userD.email)
    } else setResUser();
  };
  const createNewChat = async () => {
    // let res = await getChat(userD, resUser);
    // console.log(res);
    createChat(userD, resUser);
    close(false);
  };

  return (
    <>
      <div className={styles.newChat}>
        <i
          style={{ cursor: "pointer" }}
          onClick={() => {
            close(false);
          }}
          className={`fa-solid fa-x ${styles.close}`}
        ></i>
        <h1>Create New Chat</h1>
        <div className={styles.inp}>
          <label htmlFor="user"> Email</label>
          <input
            ref={inp}
            onChange={handleChange}
            type="text"
            id="user"
            placeholder="Enter User Email"
          />
        </div>
        <div className={styles.showUser}>
          {resUser && (
            <div onClick={createNewChat} className={styles.user}>
              <h2>{resUser.name}</h2>
              <p>{resUser.email}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
