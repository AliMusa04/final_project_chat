import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Conversation from "../../components/Conversation/Conversation";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../consts";
import "./messenger.css";

const Messenger = () => {
  const user = useSelector((state) => state.users.value);
  console.log(user);
  const [allChats, setAllChats] = useState([]);
  console.log(allChats);

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
        <div className="Chat">
          <div className="Left-side-chat">
            <div className="Chat-container">
              <h2>Chats</h2>
              <div className="Chat-list">
                {allChats &&
                  allChats.map((chat) => {
                    return (
                      <div>
                        <Conversation data={chat} currentUser={user._id} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="Right-side-chat">Right side</div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
