import css from "./Signin.module.css"
function Signin ({setViewLogin}){
    return <>
        <div className={css["text"]}>
        Already have an account?
        </div>
        <div className={css["signin"]} onClick={()=>setViewLogin(true)}>Sign in</div>
    </>
}
export default Signin;