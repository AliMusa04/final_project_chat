import React from "react";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Mainsidebar from "../../components/MainSidebar/Mainsidebar";
import Navbar from "../../components/Navbar/Navbar";
import RightProfile from "../../components/RightBarProfile/RightProfile";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
import Share from "../../components/Share/Share";
import style from "./profile.module.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className={style.profile_page_cont}>
        <Leftsidebar />
        <div className={style.profile_page_right_side}>
          <div className={style.profile_page_top_pics}>
            <div className={style.profile_page_cover_div}>
              <img
                className={style.profile_page_cover}
                src="https://th.bing.com/th/id/R.30ab5c5f19121a386ca1b5295af759b8?rik=RO6UnwW5ixbUtQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f25527-nature-hill-Sun.jpg&ehk=hgyB105muadFNSDQjRHEUqVXGmRdDOxaNbGkgs8tXbU%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className={style.profile_page_pics_user}>
              <img
                className={style.profile_page_pics_img}
                src="https://th.bing.com/th/id/R.4b1ebbdf9a6a42f23de2678c80eb02df?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className={style.profile_page_username_desc}>
              <h3>Ali Musayev</h3>
              <p>Hi im alijkasdfkjdsjfkajdfjkdsjkdfjkasdjk</p>
            </div>
          </div>
          <div className={style.profile_page_right_bottom_section}>
            <Mainsidebar />
            <RightProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
