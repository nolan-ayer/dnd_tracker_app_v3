import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/auth-context";

import styles from "./ChangePasswordForm.module.css";

const ChangePasswordForm = () => {
  const authCtx = useContext(AuthContext);
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const updatedPasswordChangeHandler = (event) => {
    setEnteredNewPassword(event.target.value);
  };

  const resetHandler = () => {
    setEnteredNewPassword("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //validate entries
    async function postUpdatedPasswordHandler() {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBYsoaIS-06L99OeylFrI3K1WtFiTvLQ38",
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
        } else {
          alert(errorMessage);
        }
      } else if (response.ok) {
        authCtx.login(data.idToken);

        alert("Password change successful!");
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
    <main className={styles.changePasswordFormContainer}>
      <form className={styles.changePasswordForm}>
        <div>
          <input
            type="text"
            className={styles.changePasswordFormInput}
            placeholder="Enter new password"
            minLength="7"
            value={enteredNewPassword}
            onChange={updatedPasswordChangeHandler}
          ></input>
        </div>
        <div>
          <button
            className={isDisabled ? "submitButton__disabled" : "submitButton"}
            type="submit"
            onClick={submitHandler}
            disabled={isDisabled}
            title={
              isDisabled ? "Password must be at least 7 characters long" : null
            }
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default ChangePasswordForm;
