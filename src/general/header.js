import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComp = () => {
    const user = useSelector(state => state.user.user)
    if (user == undefined) {
        return <>
            <header>
                <Link to="/logIn" ><button title="למשתמש עם חשבון קיים">כניסה</button></Link>
                <Link to="/signIn" ><button title="למשתמש חדש. לפתיחת חשבון">הרשמה</button></Link>
            </header>
        </>
    }
    else {
        return <>
            <header>
                <Link to={"/"}><button title="שם משתמש">{{ user }}</button></Link>
                <div>therer is user</div>
            </header>
        </>
    }
}
export default HeaderComp;