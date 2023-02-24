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
  let active_div_left = {
    borderLeft: "4px solid blue",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",

    // height: "38px",
    // width: "5px",
    // borderRadius: "40%",
  };
  let active_div = {
    // height: "38px",
    // width: "5px",
    // borderRadius: "40%",
    borderLeft: "4px solid transparent",
    // backgroundColor: "transparent",
  };

  const user = useSelector((state) => state.users.value);
  return (
    <div className={style.left_side_section}>
      <div className={style.left_side_options_wrapper}>
        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <AiFillHome className={`${style.option_icon} `} />
              <h5 className={style.option_text}>Home</h5>
            </div>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={`/profile/${user.username}`}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
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

        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <IoLogoYoutube
                className={`${style.option_icon} ${style.active} `}
              />
              <h5 className={style.option_text}>Watch</h5>
            </div>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <FaUserFriends
                className={`${style.option_icon} ${style.active}  `}
              />
              <h5 className={style.option_text}>Friends</h5>
            </div>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <BsShop className={`${style.option_icon} ${style.active} `} />
              <h5 className={style.option_text}>Marketplace</h5>
            </div>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <MdGroups className={`${style.option_icon} ${style.active}  `} />
              <h5 className={style.option_text}>Groups</h5>
            </div>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              <SiYoutubegaming
                className={`${style.option_icon} ${style.active} `}
              />
              <h5 className={style.option_text}>Gaming</h5>
            </div>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              {/* <div className={style.left_side_option_icon_bg}> */}
              <TbGridDots className={`${style.option_icon} `} />
              {/* </div> */}
              <h5 className={style.option_text}>See all</h5>
            </div>
          </div>
        </NavLink>

        <div className={style.line_div}>
          <hr />
        </div>
        <NavLink
          style={({ isActive }) => (isActive ? active_div_left : active_div)}
          to={"/login"}>
          <div className={style.left_side_option}>
            <div className={style.active_div}></div>
            <div className={style.left_side_option_icon_text}>
              {/* <div className={style.left_side_option_icon_bg}> */}
              <GiLinkedRings className={`${style.option_icon} `} />
              {/* </div> */}
              <h5 className={style.option_text}>See all shortcuts</h5>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Leftsidebar;
