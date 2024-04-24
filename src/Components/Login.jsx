import SvgLogo from "../assets/SvgLogo";
import Styles from "./Login.module.css";
import LoginUsing from "./LoginUsing";
import Signin from "./Signin";
function Login() {
  return (
    <>
      <div className={Styles["main"]}>
        <div className={Styles["body"]}>
          <div className={Styles["main-body"]}>
            <div className={Styles["logo-div"]}>
              <SvgLogo />
            </div>
            <div className={Styles["login-div"]}>
              <div className={Styles["main-heading"]}>Happening now</div>
              <div className={Styles["sub-heading"]}>Join today.</div>
              <LoginUsing></LoginUsing>
              <Signin></Signin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
