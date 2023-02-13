import Leftsidebar from "./components/LeftSidebar/Leftsidebar";
import Mainsidebar from "./components/MainSidebar/Mainsidebar";
import Navbar from "./components/Navbar/Navbar";
import Rightsidebar from "./components/RightSidebar/Rightsidebar";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import style from "./components/RightSidebar/rightSide.module.css";
import Home from "./page/Home/Home";

function App() {
  return (
    <Home />
    // <>
    //   <Navbar />
    //   <div className={style.home_contanier}>
    //     <Leftsidebar />
    //     <div className={style.home_contanier_mid}>
    //       <Mainsidebar />
    //     </div>
    //     <Rightsidebar />
    //   </div>
    // </>
  );
}

export default App;
