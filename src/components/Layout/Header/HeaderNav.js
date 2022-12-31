import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import LoggedInNav from "./LoggedInNav";
import LoginNav from "./LoginNav";

const HeaderNav = () => {
  const authCtx = useContext(AuthContext);

  return <>{!authCtx.isLoggedIn ? <LoginNav /> : <LoggedInNav />}</>;
};

export default HeaderNav;
