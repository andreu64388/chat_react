import React, { useContext, useState } from "react";
import { Context } from "./../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
const Chat = () => {
  const [message, setMessages] = useState("");
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loaging] = useCollectionData(
    db.collection("messages").orderBy("createdAt")
  );
  const onKeyFunction = (event) => {
    if (event.key === "Enter") {
      AddMessage();
    }
  };
  const AddMessage = async () => {
    await db.collection("messages").add({
      uid: user.uid,
      photo: user.photoURL,
      text: user.displayName + ":" + message,
      createdAt: new Date(),
      user: user.displayName,
    });
    console.log(user.photoURL);

    setMessages("");
  };
  return (
    <div className="chat">
      <div className="wrapper">
        <div className="osnova">
          <div className="onova_chat">
            {messages?.map((value) => {
              console.log(value.photo);

              return (
                <div className={user.uid === value.uid ? "left" : "message"}>
                  <div className="img">
                    <img src={value.photo} alt="" />
                  </div>

                  <div className="messages">{value.text}</div>
                  <p> {value.displayName} </p>
                </div>
              );
            })}

            {/*  <div className="message">
              <div className="img"></div>
              <div className="messages">tesv</div>
            </div> */}
          </div>
          <div className="input_button">
            <div className="acc">
              <div className="acc_img">
                <img src={user.photoURL} />
              </div>
              <div className="acc_name">
                <p>{user.displayName}</p>
              </div>
            </div>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setMessages(e.target.value)}
                value={message}
                placeholder="Введите сообщение"
                onKeyDown={onKeyFunction}
              />
              <button onClick={AddMessage}>Oтправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
