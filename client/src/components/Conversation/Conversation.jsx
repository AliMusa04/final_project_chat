import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../consts";
import "./conversation.css";

const Conversation = ({ data, currentUser }) => {
  const [friendData, setFriendData] = useState([]);
  console.log(friendData);

  useEffect(() => {
    const friendId = data.members.find((id) => id !== currentUser);
    const getFriendData = async () => {
      try {
        if (friendId !== undefined) {
          const res = await axios.get(
            `${BASE_URL}/users/getuser/withId/${friendId}`
          );
          setFriendData(res.data.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getFriendData();
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div className="user_img_name">
          <div className="online-dot"></div>
          <img
            src={friendData ? friendData.profilePic : "/assets/NoProfImg.webp"}
            alt=""
            className="followerImg"
          />
          <div className="name_messenger" style={{ fontSize: "1rem" }}>
            <span className="messenger_friend_name">{friendData.username}</span>
            <span className="online_text">Online</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", border: "0.1px solid #c7c5c5" }} />
    </>
  );
};

export default Conversation;
