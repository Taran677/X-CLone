import css from "./Signin.module.css"
function Signin (){
    return <>
        <div className={css["text"]}>
        Already have an account?
        </div>
        <div className={css["signin"]}>Sign in</div>
    </>
}
export default Signin;