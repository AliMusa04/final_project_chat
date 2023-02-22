import React, { useEffect, useState } from "react";
import style from "./rightProfile.module.css";
import { BiEditAlt } from "react-icons/bi";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../consts";

const RightProfile = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const userAdmin = useSelector((state) => state.users.value);
  const [friends, setFriends] = useState([]);
  console.log(friends);
  // const getFriends = async () => {
  //   try {
  //     const friendsUser = await axios.get(
  //       `${BASE_URL}/users/friends/${user._id}`
  //     );
  //     setFriends(friendsUser.data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsUser = await axios.get(
          `${BASE_URL}/users/friends/${user._id}`
        );
        setFriends(friendsUser.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFriends();
  }, [user._id]);

  return (
    <>
      <div className={style.profile_right_cont}>
        <div className={style.profile_right_user_info}>
          <div className={style.edit_btn_div}>
            <h3 className={style.profile_right_user_info_h3}>
              User information
            </h3>
            {userAdmin._id === user._id ? (
              <button onClick={showModal} className={style.edit_btn}>
                Edit <BiEditAlt className={style.edit_icon} />
              </button>
            ) : (
              <p style={{ display: "none" }}>halo</p>
            )}
          </div>
          <Modal
            width={400}
            footer={null}
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className={style.edit_cover_phot}>
              <label>For cover photo </label>
              <input type={"file"} />
            </div>
            <div className={style.edit_cover_phot}>
              <label>For profile photo </label>
              <input type={"file"} />
            </div>
            <div className={style.edit_cover_phot}>
              <label>For City </label>
              <input type={"text"} />
            </div>
            <div className={style.edit_cover_phot}>
              <label>For From </label>
              <input type={"text"} />
            </div>
            <div className={style.edit_cover_phot}>
              <label>For City photo </label>
              <select type={"select"}>
                <option disabled value="">
                  Choose relation
                </option>
                <option value="1">Single</option>
                <option value="2">Married</option>
                <option value="3">In a relationship </option>
                <option value="4">No Information </option>
              </select>
            </div>
            <div className={style.button_edit_submit}>
              <button type="submit">Submit</button>
            </div>
          </Modal>
          <div className={style.info_text}>
            <p className={style.info_text_p}>
              <span className={style.info_text_title}>City: </span>
              {user?.city ? user?.city : "No Information"}
            </p>
            <p className={style.info_text_p}>
              <span className={style.info_text_title}>From: </span>
              {user?.from ? user?.from : "No Information"}
            </p>
            <p className={style.info_text_p}>
              <span className={style.info_text_title}>Relationship: </span>
              {user.reltionship === 1
                ? "single"
                : user.reltionship === 2
                ? "Married"
                : user.reltionship === 3
                ? "In a relationship"
                : "No Information"}
            </p>
          </div>
        </div>

        <div className={style.profile_right_user_friends_wrapper}>
          <div className={style.profile_right_friends}>
            {/* {friends &&
              friends?.map((friend) => {
                return ( */}
            <div className={style.profile_right_friends_friend_card}>
              <div className={style.profile_right_friends_friend_card_img}>
                <img
                  className={style.profile_right_friends_friend_pic}
                  src={"/assets/NoProfImg.webp"}
                  alt=""
                />
              </div>
              <p className={style.profile_right_friends_friend_card_username}>
                Sadiq Ibrahimli
              </p>
            </div>
            {/* // ); // })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProfile;
