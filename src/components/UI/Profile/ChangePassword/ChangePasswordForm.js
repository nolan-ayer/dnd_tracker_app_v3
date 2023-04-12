import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/auth-context";

import styles from "./ChangePasswordForm.module.css";

const ChangePasswordForm = () => {
  const authCtx = useContext(AuthContext);
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [enteredNewPasswordCheck, setEnteredNewPasswordCheck] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const enteredPasswordChangeHandler = (event) => {
    setEnteredNewPassword(event.target.value);
  };

  const checkEnteredPasswordHandler = (event) => {
    setEnteredNewPasswordCheck(event.target.value);
  };

  const resetHandler = () => {
    setEnteredNewPassword("");
    setEnteredNewPasswordCheck("");
  };

  const passwordCheckHandler = (event) => {
    event.preventDefault();
    if (enteredNewPassword !== enteredNewPasswordCheck) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsLoading(true);
      submitHandler();
    }
  };

  const submitHandler = () => {
    //validate entries
    async function postUpdatedPasswordHandler() {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBYsoaIS-06L99OeylFrI3K1WtFiTvLQ38`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword.trim(),
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        let errorMessage =
          "Oops, something seems to have gone wrong. Please reload the page and try again.";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          alert(errorMessage);
          setIsLoading(false);
        } else {
          alert(errorMessage);
          setIsLoading(false);
        }
      } else if (response.ok) {
        authCtx.login(data.idToken);
        alert("Password change successful!");
        setIsLoading(false);
        resetHandler();
      }
    }
    postUpdatedPasswordHandler();
  };

  useEffect(() => {
    if (!enteredNewPassword) {
      setIsDisabled(true);
    } else if (enteredNewPassword && enteredNewPassword.length >= 7) {
      setIsDisabled(false);
    }
  }, [enteredNewPassword]);

  return (
    <>
      <section className="centered">
        Change your password here by entering it here! Be sure not to forget it
        though, as password resets are not a functional feature as of yet!
      </section>
      <form className="contentMainPlacementHelper">
        <div className="mainContentsStandalone">
          <input
            type="password"
            className={
              isValid === true
                ? styles.changePasswordFormInput
                : styles.changePasswordFormInput__invalid
            }
            placeholder="Enter new password"
            minLength="7"
            value={enteredNewPassword}
            onChange={enteredPasswordChangeHandler}
          />
          <input
            type="password"
            className={
              isValid === true
                ? styles.changePasswordFormInput
                : styles.changePasswordFormInput__invalid
            }
            placeholder="Enter new password"
            minLength="7"
            value={enteredNewPasswordCheck}
            onChange={checkEnteredPasswordHandler}
          />
          <nav
            className={
              !isLoading && isValid
                ? "submitButtonContainer"
                : "submitButtonContainer2"
            }
          >
            {isLoading && <p className="response__isLoading">loading...</p>}
            {!isValid && !isLoading && (
              <p className="response__invalid">Passwords must match</p>
            )}
            <button
              // className={isDisabled ? "submitButton__disabled" : "submitButton"}
              className="material-icons md-light save"
              type="submit"
              onClick={passwordCheckHandler}
              disabled={isDisabled}
              title={
                isDisabled
                  ? "Password must be at least 7 characters long"
                  : null
              }
            >
              save
            </button>
          </nav>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;
