import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@mui/material";
import MyInput from "../general-fields/inputField";

const Login = () => {
    const { recipes } = useSelector(state => ({
        recipes: state.recipes.recipes
    }));
    const userSchema = yup.object({
        Username: yup.string().required("הכנס שם משתמש. זהו שדה חובה"),
        Password: yup.string().required("הכנס סיסמא. זהו שדה חובה"),
    }).required()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema)
    });
    const onSubmit = data => {
        axios.post("http://localhost:8080/api/user/login", {
            "Username": data.Username,
            "Password": data.Password
        }).then(res => {
            dispatch({ type: "SET_USER", payload: res.data })
            console.log(res.data);
            // navigate(`/home`)
        }).catch(err => {
            console.log(err);
            if (err?.response?.data != undefined)
                alert(err.response.data);
        })
        navigate("/displayRecipes");
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <MyInput name="Username" register={register} errors={errors} label="שם משתמש" />
            <MyInput name="Password" register={register} errors={errors} label="סיסמא" />
            {/* <InputPassword name="Password" register={register} errors={errors} label="סיסמא" /> */}
            <Input type="submit" />
        </form>
        {console.log("login recipes: ", recipes)}
    </>
}
export default Login;