import css from "./LoginUsing.module.css";

function LoginUsing() {
  return (
    <>
      <div className={css.container}>
        <div className={`${css.google} ${css.btn}`}>
          <div className={css.logo}>
            <img src="./src/assets/Google.svg" alt="google" />
          </div>
          <div className={css.name}>Sign up with Google</div>
        </div>
        <div className={`${css.apple} ${css.btn}`}>
          <div className={css.logo}>
            <img src="./src/assets/Apple.svg" alt="apple" />
          </div>
          <div className={css.name}>Sign up with Apple</div>
        </div>
        <div className={css.or}>
          <div className={css.line}></div>
          <div className={css.ortext}>or</div>
          <div className={css.line}></div>
        </div>
        <div className={`${css["create-account"]} ${css.btn}`}>Create account</div>
        <div className={css.tnc}>
          By signing up, you agree to the{" "}
          <a href="#" className={css.anchor}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className={css.anchor}>
            Privacy Policy
          </a>{" "}
          , including{" "}
          <a href="#" className={css.anchor}>
            Cookie Use
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default LoginUsing;
