import SignupForm from "./SignupForm";
import SignupNote from "./SignupNote";
import styles from "./SignupMain.module.css";

const SignupMain = () => {
  return (
    <div className={styles.signupMain}>
      <SignupNote />
      <SignupForm />
    </div>
  );
};

export default SignupMain;
