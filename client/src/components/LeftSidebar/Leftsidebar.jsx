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

  return (
    <div className={style.left_side_section}>
      <div className={style.left_side_options_wrapper}>
        <NavLink to={"/home"}>
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
          to={"/profile/63efa4249f29b2276a9b4cf7"}
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
                  src="https://th.bing.com/th/id/R.4b1ebbdf9a6a42f23de2678c80eb02df?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
              </div>
              <h5 className={style.option_text}>Ali Musayev</h5>
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
