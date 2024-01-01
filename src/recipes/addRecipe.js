import * as yup from "yup"
import { Button, Input } from "@mui/material";
import MyInput from "../general/inputField";
import axios from "axios";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MySelect from "../general/selcetField";

export const DifficultyLevel = [
    {
        Id: '1',
        Name: 'קלה',
    },
    {
        Id: '2',
        Name: 'בינונית',
    },
    {
        Id: '3',
        Name: 'קשה',
    },
];

const AddRecipe = () => {
    const recipeSchema = yup.object({
        RecipeName: yup.string().required("זהו שדה חובה"),
        Difficulty: yup.string().required("זהו שדה חובה"),
        Duration: yup.number().positive("משך זמן צריך להיות מספר חיובי").required("משך זמן ההכנה בערך. זהו שדה חובה"),
        Description: yup.string().required("תיאור המתכון. זהו שדה חובה"),
        Category: yup.string().required("זהו שדה חובה"),
        Img: yup.string().url("קישור URL של התמונה").nullable(),
        Ingredients: yup.array().of(
            yup.object().shape({
                Count: yup.number("כמות חייבת להיות מספר").positive("כמות חייבת להיות חיובית").required("זהו שדה חובה"),
                Type: yup.string().required("זהו שדה חובה. סוג הכמות (כפות, כוסות, חבילות, גרם וכו')"),
                Name: yup.string().required("זהו שדה חובה"),
            })
        ),
        Instructions: yup.array().of(
            yup.object().shape({
                Instruction: yup.string().required("יש להכניס הוראה. זהו שדה חובה")
            })
        ),
    }).required()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(recipeSchema) });
    const addIngredient = () => {
        recipeSchema.fields.Ingredients
    }

    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:8080/api/recipe", {
            Name: data.RecipeName,
            Instructions: data.Instructions,
            Difficulty: data.Difficulty,
            Duration: data.Duration,
            Description: data.Description,
            UserId: userId,
            CategoryId: data.Category,
            Img: data.Img,
            Ingredient: data.Ingredients
        }).then(res => {
            dispatch({ type: "ADD_RECIPE", payload: res.data });
            console.log(res);
            console.log(res.data);
            // navigate(`/home`);
        }).catch(err => {
            console.log(err);
            alert(err.response.data);
        })
    }
    return <>
        <form onSubmit={handleSubmit(onSubmit)} control="">
            <MyInput name="RecipeName" register={register} errors={errors} label="שם המתכון" />
            <MyInput name="Description" register={register} errors={errors} label="תיאור" />
            <MyInput name="Duration" register={register} errors={errors} label="זמן הכנה" helpertext="מס' הדקות" />
            <MySelect name="Difficulty" register={register} errors={errors} label="רמת קושי" options={DifficultyLevel} />
            <MySelect name="Category" register={register} errors={errors} label="קטגוריה" options={DifficultyLevel} />
            <MyInput name="Img" register={register} errors={errors} label="תמונה" helpertext="תמונה של המתכון" />
            <div>
                <MyInput data-id="count" name="Count" register={register} errors={errors} label="כמות" />
                <MyInput data-id="type" name="Type" register={register} errors={errors} label="סוג כמות" />
                <MyInput data-id="name" name="Name" register={register} errors={errors} label="שם" />
                <Button variant="contained" onClick={addIngredient}
                // disabled={
                //     !recipeSchema.fields.Ingredients.Name ||
                //     !recipeSchema.fields.Ingredients.Count ||
                //     !recipeSchema.fields.Ingredients.Type
                // }
                >הוסף מוצר</Button>
                <Button variant="contained">מחק מוצר</Button>
            </div>
            <Input type="submit" />
            {/* style={{ 'text-align': 'start' }}  */}
        </form >
    </>

}
export default AddRecipe;