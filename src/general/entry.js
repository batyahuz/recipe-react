import { Link } from "react-router-dom"

const Entry = () => {
    return <>
        <Link to="/logIn" ><button title="למשתמש עם חשבון קיים">כניסה</button></Link>
        <Link to="/signIn" ><button title="למשתמש חדש. לפתיחת חשבון">הרשמה</button></Link>
    </>
}
export default Entry;