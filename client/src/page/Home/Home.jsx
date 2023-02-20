import React from "react";
import style from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Mainsidebar from "../../components/MainSidebar/Mainsidebar";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
// import style from "../../components/RightSidebar/rightSide.module.css";

const Home = () => {
  console.log(JSON.parse(localStorage.getItem("token")));
  // const user = useSelector((state) => state.users.value);

  // const getUserData = async () => {
  //   try {
  //     const response = await getUserInfo();
  //     if (response.success) {
  //       dispatch(SetUser(response.data));
  //       // setData(response.data);
  //     } else {
  //       toast.error(response.message);
  //     }
  //   } catch (error) {
  //     // navigate("/login");
  //     toast.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   const getUser = () => {};
  //   if (localStorage.getItem("token")) {
  //     const data = getUserInfo();
  //     setData(data);
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <div className={style.home_contanier}>
        <Leftsidebar />
        <div className={style.home_contanier_mid}>
          <Mainsidebar />
        </div>
        <Rightsidebar />
      </div>
    </>
  );
};

export default Home;
