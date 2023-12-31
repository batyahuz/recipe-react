import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@mui/material";
import MyInput from "../general/input";

const Login = () => {
    // const navigate = useNavigate();
    // navigate("/logIn");

    // const dispatch = useDispatch();
    // const userSchema = yup.object({
    //     UserName: yup.string().required("אין תוכן. הכנס את שמך"),
    //     Password: yup.string().required("אין תוכן. הכנס סיסמא")
    // });
    // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) });

    // const onSubmit = (data) => {
    //     dispatch(setUser())

    // axios.post('http://localhost:8080/api/user/login').then((res) => {
    //     dispatch({ type: 'SET_USER', pylaod: res.data })
    //     navigate("/home");
    // })
    // }
    const userSchema = yup.object({
        Username: yup.string().required("הכנס שם משתמש. זהו שדה חובה"),
        Password: yup.string().required("הכנס סיסמא. זהו שדה חובה"),
    }).required()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state?.user);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema)
    });
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:8080/api/user/login", {
            Username: data.userName,
            Password: data.password
        }).then(res => {
            dispatch({ type: "SET_USER", payload: res.data })
            console.log(res.data);
            navigate(`/home`)
        }).catch(err => {
            console.log(err);
            console.log(err.response.data);
        })
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <MyInput name="Username" register={register} errors={errors} label="שם משתמש" />
            <MyInput name="Password" register={register} errors={errors} label="סיסמא" />
            {/* <InputPassword name="Password" register={register} errors={errors} label="סיסמא" /> */}
            <Input type="submit" />
        </form>
    </>
}
export default Login;