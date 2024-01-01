import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComp = () => {
    const user = useSelector(state => { state.user.name; console.log("header-state ", state); console.log("head-state.user ", state.user); })
    // useEffect({

    // }, []);
    if (user == undefined) {
        return <>
            <header>
                <div>{user ? "there is user" : "no user"}</div>
                <Link to="/logIn" ><button title="למשתמש עם חשבון קיים">כניסה</button></Link>
                <Link to="/signIn" ><button title="למשתמש חדש. לפתיחת חשבון">הרשמה</button></Link>
                <hr />
            </header>
        </>
    }
    else {
        return <>
            <header>
                {/* <div>{user}</div> */}
                <div>{user ? "there is user" : "no user"}</div>
                <Link to={"/"}><button title="שם משתמש">{{ user }}</button></Link>
                <div>therer is user</div>
            </header>
        </>
    }
}
export default HeaderComp;