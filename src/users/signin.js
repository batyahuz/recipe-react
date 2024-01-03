import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import MyInput from "../general-fields/inputField";
import { Form, useForm } from "react-hook-form";
import InputPassword from "../general-fields/inputPassword";
import { Input } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";

const Signin = () => {
    const userSchema = yup.object({
        Username: yup.string().required("זהו שדה חובה"),
        Password: yup.string().required("זהו שדה חובה"),
        Name: yup.string().required("זהו שדה חובה"),
        Phone: yup.string().matches(/^[0-9]{7,10}$/, 'טלפון חייב להכיל בין 7 ל-10 ספרות').required("זהו שדה חובה"),
        Email: yup.string().email("כתובת מייל אינה תקינה").required("זהו שדה חובה"),
        Tz: yup.string().matches(/^[0-9]{9}$/, 'תעודת זהות חייבת להכיל 9 ספרות בלבד').required("זהו שדה חובה"),
    }).required()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) });


    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:8080/api/user/sighin", {
            Username: data.Username,
            Password: data.Password,
            Name: data.Name,
            Phone: data.Phone,
            Email: data.Email,
            Tz: data.Tz

        }).then(res => {
            dispatch({ type: "SET_USER", payload: res.data });
            navigate(`/home`);
        }).catch(err => {
            console.log(err);
            if (err?.response?.data != undefined)
                alert(err.response.data);
        })
    }
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <MyInput name="Username" register={register} errors={errors} label="שם משתמש" />
            <MyInput name="Password" register={register} errors={errors} label="סיסמא" />
            {/* <InputPassword name="Password" register={register} errors={errors} label="סיסמא" /> */}
            <MyInput name="Name" register={register} errors={errors} label="שם" />
            <MyInput name="Phone" register={register} errors={errors} label="טלפון" />
            <MyInput name="Email" register={register} errors={errors} label="מייל" />
            <MyInput name="Tz" register={register} errors={errors} label="תעודת זהות" />
            <Input type="submit" />
        </form>
    </>

}
export default Signin;