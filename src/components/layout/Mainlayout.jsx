import Menubar from "../Menubar";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import Search from "../Search";

const MainLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <RegisterPage></RegisterPage>
      <Login></Login>
      <Search></Search>
    </div>
  );
};

export default MainLayout;
