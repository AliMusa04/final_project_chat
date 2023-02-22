import React, { useEffect, useState } from "react";
import style from "./rightProfile.module.css";
import { BiEditAlt } from "react-icons/bi";
import { Modal, Select } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../consts";
import { Link } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import axiosInstance from "../../apicall";
import { toast } from "react-hot-toast";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { useRef } from "react";

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (err) => {
      reject(err);
    };
  });
};

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
  const [isFollow, setIsFollow] = useState(false);

  const userAdmin = useSelector((state) => state.users.value);
  const [friends, setFriends] = useState([]);
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

  const handleFollowUnFollow = async () => {
    try {
      if (isFollow) {
        await axiosInstance.put(`${BASE_URL}/users/unfollow/${user._id}`);
        toast.success("User is unfollowed");
        getFriends();
      } else {
        await axiosInstance.put(`${BASE_URL}/users/follow/${user._id}`);
        toast.success("User is following");
        getFriends();
      }
    } catch (err) {
      console.log(err.message);
    }
    setIsFollow(!isFollow);
  };
  // useEffect(() => {
  //   try {
  //   } catch (err) {
  //     console.log(err.mess);
  //   }
  // }, []);

  useEffect(() => {
    setIsFollow(userAdmin.following.includes(user._id));
  }, [userAdmin, user._id]);

  const getFriends = async () => {
    try {
      const friendsUser = await axios.get(
        `${BASE_URL}/users/friends/${user?._id}`
      );
      setFriends(friendsUser.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFriends();
  }, [user._id]);

  const handleFileUploadCover = async (pic) => {
    const file = pic;
    const base64 = await convertBase64(file);
    setcoverFile(base64);
  };

  const handleFileUploadProf = async (pic) => {
    const file = pic;
    const base64 = await convertBase64(file);
    setprofFile(base64);
  };

  const [profFile, setprofFile] = useState("");
  const [coverFile, setcoverFile] = useState("");
  // const [cityInp, setcityInp] = useState("");
  // const [fromInp, setfromInp] = useState("");
  // const [relationInp, setrelationInp] = useState("");
  // const [descInp, setDesc] = useState("");
  const cityRef = useRef();
  const fromRef = useRef();
  const relationRef = useRef();
  const descRef = useRef();

  const handleChange = (value) => {
    // setrelationInp(value.value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPost = {
  //     userDesc: descInp,
  //     city: descInp.current.value,
  //   };
  //   if (file) {
  //     newPost.img = file;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   }
  //   try {
  //     await axiosInstance.post(`${BASE_URL}/posts`, newPost);
  //     // dispatch(setPost(newPost));
  //     window.location.reload();
  //   } catch (err) {}
  // };

  return (
    <>
      <div className={style.profile_right_cont}>
        {user._id !== userAdmin._id &&
          (isFollow ? (
            <button
              onClick={handleFollowUnFollow}
              className={style.unFollow_btn}>
              Friends <SlUserFollowing className={style.unFollow_btn_icon} />
            </button>
          ) : (
            <button onClick={handleFollowUnFollow} className={style.follow_btn}>
              Follow <SlUserFollow className={style.follow_btn_icon} />
            </button>
          ))}
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
            width={300}
            footer={null}
            title="Changes"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <form>
              <div className={style.edit_cover_phot}>
                <label>For cover photo </label>
                <label htmlFor="cover" className={style.coverPhotoWrap}>
                  <div className={style.photo_icon_back}>
                    <BsFillCameraFill />
                  </div>
                  <input
                    id="cover"
                    style={{ display: "none", paddingRight: "50px" }}
                    onChange={(e) => handleFileUploadCover(e.target.files[0])}
                    type={"file"}
                  />
                  {coverFile ? (
                    <MdOutlineDeleteForever
                      onClick={() => {
                        setcoverFile("");
                      }}
                      className={style.photoDelete}
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
              <div className={style.edit_cover_phot}>
                <label>For profile photo </label>
                <label htmlFor="profile" className={style.coverPhotoWrap}>
                  <div className={style.photo_icon_back}>
                    <BsFillCameraFill />
                  </div>
                  <input
                    style={{ display: "none", paddingRight: "50px" }}
                    id="profile"
                    onChange={(e) => handleFileUploadProf(e.target.files[0])}
                    type={"file"}
                  />
                  {profFile ? (
                    <MdOutlineDeleteForever
                      onClick={() => {
                        setprofFile("");
                      }}
                      className={style.photoDelete}
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
              <div className={style.edit_cover_phot}>
                <label>For Desciription </label>
                <input
                  ref={descRef}
                  placeholder="123456"
                  // onChange={(e) => {
                  //   setDesc(e.target.value);
                  // }}
                  type={"text"}
                />
              </div>
              <div className={style.edit_cover_phot}>
                <label>For City </label>
                <input ref={cityRef} type={"text"} />
              </div>
              <div className={style.edit_cover_phot}>
                <label>For From </label>
                <input ref={fromRef} type={"text"} />
              </div>
              <div className={style.edit_cover_phot}>
                <label>Choose Relationship </label>
                <Select
                  ref={relationRef}
                  labelInValue
                  defaultValue={{
                    label: "Choose",
                  }}
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "1",
                      label: "Single",
                    },
                    {
                      value: "2",
                      label: "Married",
                    },
                    {
                      value: "3",
                      label: "In a relationship",
                    },
                    {
                      value: "4",
                      label: "No Information",
                    },
                  ]}
                />
                {/* <select
                onChange={(e) => setrelationInp(e.target.value)}
                type={"select"}>
                <option disabled value="">
                  Choose relation
                </option>
                <option value="1">Single</option>
                <option value="2">Married</option>
                <option value="3">In a relationship </option>
                <option value="4">No Information </option>
              </select> */}
              </div>
              <div className={style.button_edit_submit}>
                <button type="submit">Submit</button>
              </div>
            </form>
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
          <h4>Friends</h4>
          <div className={style.profile_right_friends}>
            {friends ? (
              friends.map((friend) => {
                return (
                  <Link to={`/profile/${friend.username}`}>
                    <div
                      key={friend._id}
                      className={style.profile_right_friends_friend_card}>
                      <div
                        className={style.profile_right_friends_friend_card_img}>
                        <img
                          className={style.profile_right_friends_friend_pic}
                          src={
                            friend?.profilePic
                              ? friend?.profilePic
                              : "/assets/NoProfImg.webp"
                          }
                          alt=""
                        />
                      </div>
                      <p
                        className={
                          style.profile_right_friends_friend_card_username
                        }>
                        {friend?.username}
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h2>No friends yet</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProfile;
