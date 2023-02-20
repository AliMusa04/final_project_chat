import React from "react";
import style from "./share.module.css";
import { FaPhotoVideo } from "react-icons/fa";
import { FaRegLaugh } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";

const Share = () => {
  const user = useSelector((state) => state.users.value);
  return (
    <div className={style.share_wrapper}>
      <div className={style.share_wrapper_top}>
        <div className={style.share_top_profile_pic_div}>
          <img
            className={style.share_top_profile_img}
            src={user?.profilePic ? user?.profilePic : "/assets/NoProfImg.webp"}
            alt=""
          />
        </div>
        <div className={style.share_top_profile_input_div}>
          <input
            className={style.share_top_input}
            type="text"
            placeholder="What's in your mind ?"
          />
        </div>
      </div>
      <div className={style.share_wrapper_icons}>
        <div className={style.icons_wrapper}>
          {/* PHOTO VIDEO */}
          <div className={style.share_icon}>
            <FaPhotoVideo style={{ color: "red" }} className={style.icon} />
            <p className={style.share_text}>Photo/video</p>
          </div>
          {/* LOCATION */}
          <div className={style.share_icon}>
            <HiLocationMarker
              style={{ color: "green" }}
              className={style.icon}
            />
            <p className={style.share_text}>Location</p>
          </div>
          {/* FEELINGS */}
          <div className={style.share_icon}>
            <FaRegLaugh className={style.icon} style={{ color: "goldenrod" }} />
            <p className={style.share_text}>Feelings</p>
          </div>
        </div>
        <div className={style.btn_div}>
          <button className={style.share_btn}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
