import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cards from "./components/UI/Cards/Cards";
import Notes from "./components/UI/Notes/Notes";
import ChangePasswordForm from "./components/UI/Profile/ChangePassword/ChangePasswordForm";
import Welcome from "./components/UI/Welcome/Welcome";
import SignupMain from "./components/UI/Signup/SignupMain";
import LoginMain from "./components/UI/Login/LoginMain";
import AuthContext from "./context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  return (
    <Layout>
      <Switch>
        {/* {authCtx.isLoggedIn ? (
          <Route path="/cards">
            <Cards />
          </Route>
        ) : (
          history.replace("/")
        )}
        {authCtx.isLoggedIn ? (
          <Route path="/notes">
            <Notes />
          </Route>
        ) : (
          history.replace("/")
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn ? <ChangePasswordForm /> : history.replace("/")}
        </Route>
        {!authCtx.isLoggedIn ? (
          <Route path="/login">
            <LoginMain />
          </Route>
        ) : (
          history.replace("/")
        )}
        {!authCtx.isLoggedIn ? (
          <Route path="/signup">
            <SignupMain />
          </Route>
        ) : (
          history.replace("/")
        )}
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route> */}
        {authCtx.isLoggedIn && (
          <Route path="/cards">
            <Cards />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/notes">
            <Notes />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <ChangePasswordForm />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <LoginMain />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/signup">
            <SignupMain />
          </Route>
        )}
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
