import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowTitle from "../general-fields/arrow-title";

const HeaderComp = () => {
    const user = useSelector(state => { state.user.name; console.log("header-state ", state); console.log("head-state.user ", state.user); })
    // useEffect({

    // }, []);
    if (user == undefined) {
        return <>
            <header>
                <div>{user ? "there is user" : "no user"}</div>
                <Link to="/logIn" ><ArrowTitle title="למשתמש עם חשבון קיים" container={<button>כניסה</button>} /></Link>
                <Link to="/signIn" ><ArrowTitle title="למשתמש חדש. לפתיחת חשבון" container={<button>הרשמה</button>} /></Link>
                <hr />
            </header>
        </>
    }
    else {
        return <>
            <header>
                {/* <div>{user}</div> */}
                <div>{user ? "there is user" : "no user"}</div>
                <Link to={"/"}><ArrowTitle title="שם משתמש" container={<button>{{ user }}</button>} /></Link>
                <div>therer is user</div>
            </header>
        </>
    }
}
export default HeaderComp;