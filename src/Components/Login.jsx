import { useState, useEffect } from "react";
import SvgLogo from "../assets/SvgLogo";
import Styles from "./Login.module.css";
import LoginUsing from "./LoginUsing";
import Signin from "./Signin";

function Login() {
  const [loading, setLoading] = useState(true);
  const [viewLogin, setViewLogin] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={Styles["main"]}>
        {loading && (
          <div className={Styles["body-before"]}>
            <img
              src="https://raw.githubusercontent.com/Taran677/X-CLone/main/src/assets/x.svg"
              alt="logo"
            />
          </div>
        )}
        {!loading && (
          <div
            className={Styles["body"]}
            style={{
              background: viewLogin === true ? "rgb(27, 42, 56)" : "black",
              pointerEvents: viewLogin === true ? "none" : "all"
            }}            
          >
            <div className={Styles["main-body"]}>
              <div className={Styles["logo-div"]}>
                <SvgLogo />
              </div>
              <div className={Styles["login-div"]}>
                <div className={Styles["main-heading"]}>Happening now</div>
                <div className={Styles["sub-heading"]}>Join today.</div>
                <LoginUsing />
                <Signin setViewLogin={setViewLogin} />
              </div>
            </div>
          </div>
        )}
        {viewLogin === true && (
          <>
            <div className={Styles.bmain}>
              <div
                className={Styles.bclose}
                onClick={() => {
                  setViewLogin(false);
                }}
              >
                x
              </div>
              <div className={Styles.bcontainer}>
                <div className={Styles.blogo} id="xlogo">
                  <img
                    src="https://raw.githubusercontent.com/Taran677/X-CLone/main/src/assets/x.svg"
                    alt="x"
                  />
                </div>

                <div className={Styles.bhead}>Sign in to X</div>
                <div className={Styles.bbutton}>
                  <div className={Styles.blogo}>
                    <img
                      src="https://raw.githubusercontent.com/Taran677/X-CLone/main/src/assets/google.svg"
                      alt="google"
                    />
                  </div>
                  <div className={Styles.bname}>Sign up with Google</div>
                </div>
                <div className={Styles.bbutton}>
                  <div className={Styles.blogo}>
                    <img
                      src="https://raw.githubusercontent.com/Taran677/X-CLone/main/src/assets/Apple.svg"
                      alt="google"
                    />
                  </div>
                  <div className={Styles.bname}>Sign up with apple</div>
                </div>
                <div className={Styles.bor}>
                  <div className={Styles.bline}></div>
                  <div className={Styles.bortext}>or</div>
                  <div className={Styles.bline}></div>
                </div>
                <div className={Styles.binput}>
                  <input
                    type="text"
                    className={Styles.binputForm}
                    placeholder="Phone,email or username"
                  />
                </div>
                <div className={Styles.bbutton}>
                  <div className={Styles.bname}>Next</div>
                </div>
                <div id="forgot-password" className={Styles.bbutton}>
                  <div className={Styles.bname}>Forgot password?</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
