import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../apicall";
import { BASE_URL } from "../../consts";
import { hideLoad, showLoad } from "../../redux/slice/loadingSlice/loadSlice";
import Post from "../Post/Post";
import Share from "../Share/Share";
import style from "./mainSide.module.css";

const Mainsidebar = ({ username, id }) => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.users.value);
  const loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch();

  console.log(id);
  useEffect(() => {
    const getPost = async () => {
      // dispatch(showLoad());
      const res = username
        ? await axios.get(`${BASE_URL}/posts/profile/${username}`)
        : await axiosInstance.get(`${BASE_URL}/posts/timeline/${id}`);
      dispatch(showLoad());

      setPosts(
        res.data.sort((d1, d2) => {
          return new Date(d2.createdAt) - new Date(d1.createdAt);
        })
      );
      dispatch(hideLoad());
    };
    getPost();
    dispatch(hideLoad());
  }, [username, id]);

  return (
    // <div className={style.main_side_contanier}>
    <div className={style.main_side_section}>
      <div className={style.main_side_wrapper}>
        <div className={style.post_wrapper_main}>
          {!username && <Share />}
          {loading ? (
            <Spin size="large" />
          ) : (
            posts &&
            posts.map((post) => {
              return <Post key={post?._id} post={post} />;
            })
          )}
          {/* <p
            style={{ display: posts ? "flex" : "none" }}
            className={style.noPost}>
            No post yet !
          </p> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Mainsidebar;
