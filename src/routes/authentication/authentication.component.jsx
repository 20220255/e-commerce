import SignInForm from "../../compponents/sign-in/sign-in-form.component";
import SignUpForm from "../../compponents/sign-up/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
