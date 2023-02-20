import React, { useState } from "react";
import style from "./leftSide.module.css";
import { AiFillHome } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaSleigh, FaUserFriends } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";
import { GiLinkedRings } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Leftsidebar = () => {
  const [home, setHome] = useState(true);
  const [profile, setProf] = useState(false);
  const [watch, setWatch] = useState(false);
  const [friends, setFriends] = useState(false);
  const [market, setMarket] = useState(false);
  const [group, setGroup] = useState(false);
  const [gaming, setGaming] = useState(false);
  const [see, setSee] = useState(false);
  const [short, setShort] = useState(false);

  const homeFunc = () => {
    setHome(true);
    setProf(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(false);
  };
  const profileFunc = () => {
    setProf(true);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(false);
  };

  const watchFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(true);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(false);
  };

  const friendFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(true);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(false);
  };

  const marketFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(true);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(false);
  };

  const groupFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(true);
    setGaming(false);
    setSee(false);
    setShort(false);
  };
  const gameFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(true);
    setSee(false);
    setShort(false);
  };

  const seeFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(true);
    setShort(false);
  };

  const shortFunc = () => {
    setProf(false);
    setHome(false);
    setWatch(false);
    setFriends(false);
    setMarket(false);
    setGroup(false);
    setGaming(false);
    setSee(false);
    setShort(true);
  };
  const user = useSelector((state) => state.users.value);
  return (
    <div className={style.left_side_section}>
      <div className={style.left_side_options_wrapper}>
        <NavLink to={"/"}>
          <div className={style.left_side_option}>
            <div
              style={{ backgroundColor: `${home ? "blue" : "transparent"}` }}
              className={home ? style.active_div_left : style.active_div}></div>
            <div
              onClick={() => {
                homeFunc();
                console.log("salam");
              }}
              className={style.left_side_option_icon_text}>
              <AiFillHome className={`${style.option_icon} `} />
              <h5 className={style.option_text}>Home</h5>
            </div>
          </div>
        </NavLink>

        <NavLink
          to={`/profile/${user?._id}`}
          onClick={() => {
            profileFunc();
          }}>
          <div className={style.left_side_option}>
            <div
              className={
                profile ? style.active_div_left : style.active_div
              }></div>
            <div
              onClick={() => {
                profileFunc();
              }}
              className={style.left_side_option_icon_text}>
              <div className={style.left_side_profile_div}>
                <img
                  className={style.left_side_profile_pics}
                  src={
                    user?.profilePic
                      ? user?.profilePic
                      : "/assets/NoProfImg.webp"
                  }
                  alt=""
                />
              </div>
              <h5 className={style.option_text}>{user?.username}</h5>
            </div>
          </div>
        </NavLink>

        <div className={style.line_div}>
          <hr />
        </div>

        <div className={style.left_side_option}>
          <div
            className={watch ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              watchFunc();
            }}
            className={style.left_side_option_icon_text}>
            <IoLogoYoutube
              className={`${style.option_icon} ${style.active} `}
            />
            <h5 className={style.option_text}>Watch</h5>
          </div>
        </div>

        <div className={style.left_side_option}>
          <div
            className={
              friends ? style.active_div_left : style.active_div
            }></div>
          <div
            onClick={() => {
              friendFunc();
            }}
            className={style.left_side_option_icon_text}>
            <FaUserFriends
              className={`${style.option_icon} ${style.active}  `}
            />
            <h5 className={style.option_text}>Friends</h5>
          </div>
        </div>

        <div className={style.left_side_option}>
          <div
            className={market ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              marketFunc();
            }}
            className={style.left_side_option_icon_text}>
            <BsShop className={`${style.option_icon} ${style.active} `} />
            <h5 className={style.option_text}>Marketplace</h5>
          </div>
        </div>

        <div className={style.left_side_option}>
          <div
            className={group ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              groupFunc();
            }}
            className={style.left_side_option_icon_text}>
            <MdGroups className={`${style.option_icon} ${style.active}  `} />
            <h5 className={style.option_text}>Groups</h5>
          </div>
        </div>

        <div className={style.left_side_option}>
          <div
            className={gaming ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              gameFunc();
            }}
            className={style.left_side_option_icon_text}>
            <SiYoutubegaming
              className={`${style.option_icon} ${style.active} `}
            />
            <h5 className={style.option_text}>Gaming</h5>
          </div>
        </div>

        <div className={style.left_side_option}>
          <div className={see ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              seeFunc();
            }}
            className={style.left_side_option_icon_text}>
            {/* <div className={style.left_side_option_icon_bg}> */}
            <TbGridDots className={`${style.option_icon} `} />
            {/* </div> */}
            <h5 className={style.option_text}>See all</h5>
          </div>
        </div>

        <div className={style.line_div}>
          <hr />
        </div>

        <div className={style.left_side_option}>
          <div
            className={short ? style.active_div_left : style.active_div}></div>
          <div
            onClick={() => {
              shortFunc();
            }}
            className={style.left_side_option_icon_text}>
            {/* <div className={style.left_side_option_icon_bg}> */}
            <GiLinkedRings className={`${style.option_icon} `} />
            {/* </div> */}
            <h5 className={style.option_text}>See all shortcuts</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
