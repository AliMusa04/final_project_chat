import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import { BsMessenger } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineHelp } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { RiFeedbackFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import styleMain from "../MainSidebar/mainSide.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../apicall/usersApi";
import { toast } from "react-hot-toast";
import { SetUser } from "../../redux/slice/userSlice/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.users.value);
  console.log(user);
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        dispatch(SetUser(response.data));
        // setData(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      // navigate("/login");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, []);
  const toggle = () => {
    setAccount(!account);
  };
  const openFunc = () => {
    setOpen(true);
  };
  const closeFunc = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={() => {
          // closeFunc();
        }}
        className={style.navbar}>
        {/* NAVBAR LEFT */}
        <div className={style.navbar_left_part}>
          <Link to={"/home"} className={style.navbar_left_h1}>
            codemedia
          </Link>
        </div>
        {/* NAVBAR MIDDLE */}
        {/* <div className={styleMain.main_side_contanier}> */}
        <div className={style.navbar_middle_part}>
          <div
            onClick={() => {
              // openFunc();
            }}
            className={style.navbar_middle_search_div}>
            <div className={style.navbar_middle_search_input_div}>
              <input
                onFocus={() => {
                  openFunc();
                }}
                placeholder="Search for friends"
                type="text"
                className={style.navbar_middle_search_input}
              />
              <BsSearch className={style.search_icon} />
            </div>
            <div
              className={
                open
                  ? style.display_block
                  : style.navbar_middle_search_input_div_bottom
              }>
              <div className={style.navbar_middle_search_input_bottom_results}>
                <div
                  className={
                    style.navbar_middle_search_input_bottom_results_text
                  }>
                  <p className={style.results_text}>No search anymore</p>
                  <FaRegWindowClose
                    onClick={() => {
                      closeFunc();
                    }}
                    className={style.close_button}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* NAVBAR RİGHT */}
        <div
          onClick={() => {
            closeFunc();
          }}
          className={style.navbar_right_part}>
          <div
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            title="modal"
            className={style.navbar_modal_icon}>
            <BiMenuAltRight />
          </div>
          {/* <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            Toggle right offcanvas
          </button> */}
          <div className={style.navbar_right_part_icons}>
            <div title="Messenger" className={style.navbar_message_icon}>
              <BsMessenger />
            </div>
            <div title="Notification" className={style.navbar_message_icon}>
              <MdNotificationsActive />
            </div>
            <div
              onClick={() => {
                toggle();
              }}
              title="Account"
              className={style.navbar_profile_photo}>
              <img
                className={style.navbar_profile_photo_img}
                src={
                  user?.profilePic ? user?.profilePic : "/assets/NoProfImg.webp"
                }
                alt=""
              />
              <div className={style.navbar_profile_photo_icon}>
                <BsChevronDown className={style.arrow} />
              </div>
              <div
                className={
                  account
                    ? style.navbar_profile_logout
                    : style.navbar_profile_logout_display_none
                }>
                <div className={style.navbar_profile_logout_options}>
                  {/* SETTINGS */}
                  <div className={style.option}>
                    <div className={style.option_left}>
                      <div className={style.option_left_icon_backg}>
                        <IoMdSettings className={style.settings_icon} />
                      </div>
                    </div>
                    <div className={style.option_right}>
                      <p className={style.option_right_text}>
                        Settings & privacy
                      </p>
                      <BsChevronRight className={style.right_arrow} />
                    </div>
                  </div>

                  {/* HELP AND SUPPORT */}
                  <div className={style.option}>
                    <div className={style.option_left}>
                      <div className={style.option_left_icon_backg}>
                        <MdOutlineHelp className={style.settings_icon} />
                      </div>
                    </div>
                    <div className={style.option_right}>
                      <p className={style.option_right_text}>Help & support</p>
                      <BsChevronRight className={style.right_arrow} />
                    </div>
                  </div>

                  {/* DISPLAY */}
                  <div className={style.option}>
                    <div className={style.option_left}>
                      <div className={style.option_left_icon_backg}>
                        <BsFillMoonFill className={style.settings_icon} />
                      </div>
                    </div>
                    <div className={style.option_right}>
                      <p className={style.option_right_text}>
                        Display & accessibility
                      </p>
                      <BsChevronRight className={style.right_arrow} />
                    </div>
                  </div>

                  {/* FEEDBACK */}
                  <div className={style.option}>
                    <div className={style.option_left}>
                      <div className={style.option_left_icon_backg}>
                        <RiFeedbackFill className={style.settings_icon} />
                      </div>
                    </div>
                    <div className={style.option_right}>
                      <p className={style.option_right_text}>Give feedback</p>
                    </div>
                  </div>

                  {/* LOGOUT */}
                  <div
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.href = "/login";
                    }}
                    className={style.option}>
                    <div className={style.option_left}>
                      <div className={style.option_left_icon_backg}>
                        <MdLogout className={style.settings_icon} />
                      </div>
                    </div>
                    <div className={style.option_right}>
                      <p className={style.option_right_text}>Log Out</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end w-60 p-3"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          {/* <h5 id="offcanvasRightLabel">Codemedia</h5> */}
          <h2 className={style.canvas_head}>Codemedia</h2>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className={style.offcanvas_body_content}>
            <div className={style.offcanvas_icons}>
              <div className={style.offcanvas_icons_text}>
                <div title="Messenger" className={style.navbar_message_icon}>
                  <BsMessenger />
                </div>
                <p className={style.canvas_text}>Messenger</p>
              </div>
              <div className={style.offcanvas_icons_text}>
                <div title="Notification" className={style.navbar_message_icon}>
                  <MdNotificationsActive />
                </div>
                <p className={style.canvas_text}>Notifications</p>
              </div>
              <div className={style.offcanvas_icons_text}>
                <div
                  onClick={() => {
                    toggle();
                  }}
                  title="Account"
                  className={style.navbar_profile_photo}>
                  <img
                    className={style.navbar_profile_photo_img}
                    src="https://th.bing.com/th/id/R.4b1ebbdf9a6a42f23de2678c80eb02df?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                  <div className={style.navbar_profile_photo_icon}>
                    <BsChevronDown className={style.arrow} />
                  </div>
                  <div
                    className={
                      account
                        ? style.navbar_profile_logout
                        : style.navbar_profile_logout_display_none
                    }>
                    <div className={style.navbar_profile_logout_options}>
                      {/* SETTINGS */}
                      <div className={style.option}>
                        <div className={style.option_left}>
                          <div className={style.option_left_icon_backg}>
                            <IoMdSettings className={style.settings_icon} />
                          </div>
                        </div>
                        <div className={style.option_right}>
                          <p className={style.option_right_text}>
                            Settings & privacy
                          </p>
                          <BsChevronRight className={style.right_arrow} />
                        </div>
                      </div>

                      {/* HELP AND SUPPORT */}
                      <div className={style.option}>
                        <div className={style.option_left}>
                          <div className={style.option_left_icon_backg}>
                            <MdOutlineHelp className={style.settings_icon} />
                          </div>
                        </div>
                        <div className={style.option_right}>
                          <p className={style.option_right_text}>
                            Help & support
                          </p>
                          <BsChevronRight className={style.right_arrow} />
                        </div>
                      </div>

                      {/* DISPLAY */}
                      <div className={style.option}>
                        <div className={style.option_left}>
                          <div className={style.option_left_icon_backg}>
                            <BsFillMoonFill className={style.settings_icon} />
                          </div>
                        </div>
                        <div className={style.option_right}>
                          <p className={style.option_right_text}>
                            Display & accessibility
                          </p>
                          <BsChevronRight className={style.right_arrow} />
                        </div>
                      </div>

                      {/* FEEDBACK */}
                      <div className={style.option}>
                        <div className={style.option_left}>
                          <div className={style.option_left_icon_backg}>
                            <RiFeedbackFill className={style.settings_icon} />
                          </div>
                        </div>
                        <div className={style.option_right}>
                          <p className={style.option_right_text}>
                            Give feedback
                          </p>
                        </div>
                      </div>

                      {/* LOGOUT */}
                      <div className={style.option}>
                        <div className={style.option_left}>
                          <div className={style.option_left_icon_backg}>
                            <MdLogout className={style.settings_icon} />
                          </div>
                        </div>
                        <div className={style.option_right}>
                          <p className={style.option_right_text}>Log Out</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={style.canvas_text}>Account</p>
              </div>
            </div>

            <div className={style.navbar_profile_logout_canvas}>
              <div className={style.navbar_profile_logout_options}>
                {/* SETTINGS */}
                <div className={style.option}>
                  <div className={style.option_left}>
                    <div className={style.option_left_icon_backg}>
                      <IoMdSettings className={style.settings_icon} />
                    </div>
                  </div>
                  <div className={style.option_right}>
                    <p className={style.option_right_text}>
                      Settings & privacy
                    </p>
                    <BsChevronRight className={style.right_arrow} />
                  </div>
                </div>

                {/* HELP AND SUPPORT */}
                <div className={style.option}>
                  <div className={style.option_left}>
                    <div className={style.option_left_icon_backg}>
                      <MdOutlineHelp className={style.settings_icon} />
                    </div>
                  </div>
                  <div className={style.option_right}>
                    <p className={style.option_right_text}>Help & support</p>
                    <BsChevronRight className={style.right_arrow} />
                  </div>
                </div>

                {/* DISPLAY */}
                <div className={style.option}>
                  <div className={style.option_left}>
                    <div className={style.option_left_icon_backg}>
                      <BsFillMoonFill className={style.settings_icon} />
                    </div>
                  </div>
                  <div className={style.option_right}>
                    <p className={style.option_right_text}>
                      Display & accessibility
                    </p>
                    <BsChevronRight className={style.right_arrow} />
                  </div>
                </div>

                {/* FEEDBACK */}
                <div className={style.option}>
                  <div className={style.option_left}>
                    <div className={style.option_left_icon_backg}>
                      <RiFeedbackFill className={style.settings_icon} />
                    </div>
                  </div>
                  <div className={style.option_right}>
                    <p className={style.option_right_text}>Give feedback</p>
                  </div>
                </div>

                {/* LOGOUT */}
                <div className={style.option}>
                  <div className={style.option_left}>
                    <div className={style.option_left_icon_backg}>
                      <MdLogout className={style.settings_icon} />
                    </div>
                  </div>
                  <div className={style.option_right}>
                    <p className={style.option_right_text}>Log Out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Overlay />
      <Modal /> */}
    </>
  );
};

export default Navbar;
