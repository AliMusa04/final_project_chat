import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../consts";
import { hideLoad, showLoad } from "../../redux/slice/loadingSlice/loadSlice";
import style from "./rightSide.module.css";
// import InputEmoji from "react-input-emoji";

const Rightsidebar = () => {
  const user = useSelector((state) => state.users.value);
  const loading = useSelector((state) => state.loading.value);
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();

  const getFriends = async () => {
    dispatch(showLoad());
    try {
      if (user._id && user._id !== undefined) {
        const friendsUser = await axios.get(
          `${BASE_URL}/users/friends/${user._id}`
        );
        setFriends(friendsUser.data);
        dispatch(hideLoad());
      }
    } catch (err) {
      dispatch(hideLoad());
      console.log({ message: err.message });
    }
  };
  useEffect(() => {
    getFriends();
  }, [user._id]);
  return (
    <div className={style.right_side_section}>
      <div className={style.right_side_wrapper}>
        {/* SPONSORED SECTION */}
        <div className={style.right_side_sponsored}>
          <div className={style.sponsored_section_title}>
            <h2 className={style.sponsored_section_title_h2}>Sponsored</h2>
          </div>
          <div className={style.sponsored_pics_wrapper}>
            <div className={style.sponsored_pics_card}>
              <div className={style.sponsored_pics_card_img}>
                <img
                  className={style.sponsored_img}
                  src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t45.1600-4/329956453_23843525211190794_7818292970871822706_n.png?stp=cp0_dst-jpg_p960x960_q90_spS444&_nc_cat=110&ccb=1-7&_nc_sid=67cdda&_nc_ohc=taUk4gOqTzQAX9z06ez&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfD812lAbSo9PL-nKNvWTJWLEamywQ9_EwzZr9wVJh4DJg&oe=63EE881B"
                  alt=""
                />
              </div>
              <div className={style.sponsored_pics_card_text}>
                <a href="#" className={style.sponsored_pics_card_text_link}>
                  code.edu.az
                </a>
              </div>
            </div>
            <div className={style.sponsored_pics_card}>
              <div className={style.sponsored_pics_card_img}>
                <img
                  className={style.sponsored_img}
                  src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t45.1600-4/321010980_23853222706680125_8921886000993054024_n.jpg?stp=cp0_dst-jpg_p960x960_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=67cdda&_nc_ohc=l97GnYLBt90AX9Gu9M7&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfBElJFoq2a4OzZ42maYV8GEPXxvEmgu0UgFXH7omkFT4A&oe=63EF4E12"
                  alt=""
                />
              </div>
              <div className={style.sponsored_pics_card_text}>
                <a href="#" className={style.sponsored_pics_card_text_link}>
                  irshad.az
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FRIENDS SECTION */}
        <div className={style.right_side_friends}>
          <div className={style.right_side_friends_title}>
            <h3 className={style.right_side_friends_title_h3}>Friends</h3>
          </div>
          <div className={style.right_side_friends_wrapper}>
            {loading ? (
              <Spin />
            ) : (
              friends &&
              friends.map((friend) => {
                return (
                  <Link to={`/profile/${friend?.username}`}>
                    <div
                      key={friend?._id}
                      className={style.right_side_friends_prof}>
                      <div className={style.right_side_friends_prof_pic_div}>
                        <img
                          className={style.right_side_friends_prof_img}
                          src={
                            friend.profilePic
                              ? friend?.profilePic
                              : "/assets/NoProfImg.webp"
                          }
                          alt=""
                        />
                      </div>
                      <div className={style.right_side_friends_username_div}>
                        <h5 className={style.right_side_friends_username}>
                          {friend.username}
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
