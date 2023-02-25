import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Conversation from "../../components/Conversation/Conversation";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import MessageBox from "../../components/MessageBox/MessageBox";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../consts";
import "./messenger.css";

const Messenger = () => {
  const user = useSelector((state) => state.users.value);
  const [allChats, setAllChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/chat/${user._id}`);
        setAllChats(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getChats();
  }, [user]);
  return (
    <>
      <Navbar />
      <div className="contanier_messenger">
        <Leftsidebar />
        <div className="chat_right_contanier">
          <div className="Chat">
            {/* LEFT SIDE  */}
            <div className="Left-side-chat">
              <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                  {allChats &&
                    allChats.map((chat) => {
                      return (
                        <div onClick={() => setCurrentChat(chat)}>
                          <Conversation data={chat} currentUser={user._id} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE  */}
            <div className="Right-side-chat">
              <MessageBox chat={currentChat} adminUser={user._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
