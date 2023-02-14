import React from "react";
import style from "./rightProfile.module.css";

const RightProfile = () => {
  return (
    <div className={style.profile_right_cont}>
      <div className={style.profile_right_user_info}>
        <h3 className={style.profile_right_user_info_h3}>User information</h3>
        <div className={style.info_text}>
          <p className={style.info_text_p}>
            <span className={style.info_text_title}>City: </span> Baku
          </p>
          <p className={style.info_text_p}>
            <span className={style.info_text_title}>From: </span> Lacin
          </p>
          <p className={style.info_text_p}>
            <span className={style.info_text_title}>Relationship: </span> Single
          </p>
        </div>
      </div>
      <div className={style.profile_right_user_friends_wrapper}>
        <div className={style.profile_right_friends}>
          <div className={style.profile_right_friends_friend_card}>
            <div className={style.profile_right_friends_friend_card_img}>
              <img
                className={style.profile_right_friends_friend_pic}
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt=""
              />
            </div>
            <p className={style.profile_right_friends_friend_card_username}>
              Sadiq Ibrahimli
            </p>
          </div>

          <div className={style.profile_right_friends_friend_card}>
            <div className={style.profile_right_friends_friend_card_img}>
              <img
                className={style.profile_right_friends_friend_pic}
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt=""
              />
            </div>
            <p className={style.profile_right_friends_friend_card_username}>
              Sadiq Ibrahimli
            </p>
          </div>
          <div className={style.profile_right_friends_friend_card}>
            <div className={style.profile_right_friends_friend_card_img}>
              <img
                className={style.profile_right_friends_friend_pic}
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt=""
              />
            </div>
            <p className={style.profile_right_friends_friend_card_username}>
              Sadiq Ibrahimli
            </p>
          </div>
          <div className={style.profile_right_friends_friend_card}>
            <div className={style.profile_right_friends_friend_card_img}>
              <img
                className={style.profile_right_friends_friend_pic}
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt=""
              />
            </div>
            <p className={style.profile_right_friends_friend_card_username}>
              Sadiq Ibrahimli
            </p>
          </div>
          <div className={style.profile_right_friends_friend_card}>
            <div className={style.profile_right_friends_friend_card_img}>
              <img
                className={style.profile_right_friends_friend_pic}
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt=""
              />
            </div>
            <p className={style.profile_right_friends_friend_card_username}>
              Sadiq Ibrahimli
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProfile;
