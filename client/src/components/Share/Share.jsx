import React from "react";
import style from "./share.module.css";
import { FaPhotoVideo } from "react-icons/fa";
import { FaRegLaugh } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Share = () => {
  return (
    <div className={style.share_wrapper}>
      <div className={style.share_wrapper_top}>
        <div className={style.share_top_profile_pic_div}>
          <img
            className={style.share_top_profile_img}
            src="https://th.bing.com/th/id/R.4b1ebbdf9a6a42f23de2678c80eb02df?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0"
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
