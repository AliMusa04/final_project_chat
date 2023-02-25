import { current } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Conversation from "../../components/Conversation/Conversation";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import MessageBox from "../../components/MessageBox/MessageBox";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../consts";
import "./messenger.css";
// import  io  from "socket.io-client";

const Messenger = () => {
  const user = useSelector((state) => state?.users?.value);
  const [allChats, setAllChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  // const [onlineFriend, setOnlineFriend] = useState([]);
  // const [acceptMessage, setAcceptMessage] = useState(null);

  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    // socket.current.on("getMessage", (data) => {});
  }, []);

  useEffect(() => {
    if (socket && user._id) {
      socket.current.emit("addUser", user._id);
      socket.current.on("getUsers", (users) => {
        console.log(users);
      });
    }
  }, [user]);

  //SEND MESSAGE TO SOCKET SERVER
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // RECEIVE MESSAGE FROM SEOCKET SERVER
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data);
    });
  }, []);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("welcome", (message) => {
  //       console.log(message);
  //     });
  //   }
  // }, [socket]);

  //CONNECTED OCKET SERVER
  // useEffect(() => {
  //   if (user) {
  //     socket.current = io("ws://localhost:8800");
  //     socket.current.emit("new-user-add", user._id);
  //     socket.current.on("get-users", (users) => {
  //       setOnlineFriend(users);
  //       console.log(onlineFriend);
  //     });
  //   }
  // }, [user]);

  //SENDING MESSAGE SOCKET SERVER
  // useEffect(() => {
  //   if (sendingMessage !== null) {
  //     socket.current.emit("send-message", sendingMessage);
  //   }
  // }, [sendingMessage]);

  //ACCPET MESSAGE FROM SERVER
  // useEffect(() => {
  //   socket.current.on("receive-message", (data) => {
  //     setAcceptMessage(data);
  //   });
  // }, []);

  //GET CHAT

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
              <MessageBox
                chat={currentChat}
                adminUser={user._id}
                setSendMessage={setSendMessage}
                receivedMessage={receivedMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
