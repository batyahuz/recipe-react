import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import Input from "../general/input";

const Login = () => {
    const navigate = useNavigate();
    navigate("/logIn");

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) });

    const userSchema = yup.object({
        UserName: yup.string().required("אין תוכן. הכנס את שמך"),
        Password: yup.string().required("אין תוכן. הכנס סיסמא")
    });

    const onSubmit = (data) => {
        dispatch(setUser())

        // axios.post('http://localhost:8080/api/user/login').then((res) => {
        //     dispatch({ type: 'SET_USER', pylaod: res.data })
        //     navigate("/home");
        // })
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="Name" register={register} errors={errors} label="שם משתמש" />
            <Input name="Password" register={register} errors={errors} label="סיסמא" />
            <input type="submit" value="הכנס" />
        </form>
    </>
}
export default Login;