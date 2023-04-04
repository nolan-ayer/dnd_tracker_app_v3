import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../context/auth-context";
import styles from "../Signup/SignupForm.module.css";

const SignupForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [existingUser, setExistingUser] = useState(false);

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setpasswordInput(event.target.value);
  };

  useEffect(() => {
    if (!emailInput || !passwordInput) {
      setIsDisabled(true);
    } else if (emailInput && passwordInput) {
      setIsDisabled(false);
    }
  }, [emailInput, passwordInput]);

  const resetHandler = () => {
    setEmailInput("");
    setpasswordInput("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    async function newAccountSubmissionHandler() {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYsoaIS-06L99OeylFrI3K1WtFiTvLQ38";

      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailInput.trim(),
          password: passwordInput.trim(),
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const userID = data.localId;
      console.log(userID);

      setIsLoading(false);

      if (!response.ok) {
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
      } else if (response.ok) {
        authCtx.login(data.idToken);

        alert("Account successfully created!");
        resetHandler();
      }
    }
    newAccountSubmissionHandler();
  };

  const toggleLoginTypeHandler = () => {
    setExistingUser(!existingUser);
  };

  return (
    <div className="contentMain">
      <form className="contentMainPlacementHelper">
        <div className="mainContentsStandalone">
          <input
            type="text"
            className={styles.signupTextField}
            placeholder="Enter your email"
            value={emailInput}
            onChange={emailChangeHandler}
          />
          <input
            className={styles.signupTextField}
            type="password"
            placeholder="Enter a password"
            value={passwordInput}
            onChange={passwordChangeHandler}
          />

          <nav className={styles.signupCardContainer}>
            <Link
              to="/login"
              className="embeddedLink"
              onClick={toggleLoginTypeHandler}
            >
              Already have an account?
            </Link>

            {!isLoading && (
              <button
                className={
                  isDisabled ? "submitButton__disabled" : "submitButton"
                }
                type="submit"
                onClick={submitHandler}
                disabled={isDisabled}
                title={
                  isDisabled
                    ? "Please fill out all entries before submitting"
                    : null
                }
              >
                <span className={styles.text}>Create Account</span>
              </button>
            )}
            {isLoading && <p>Processing request...</p>}
          </nav>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
