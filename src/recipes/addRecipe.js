// import * as yup from "yup"
// import { Button, Input } from "@mui/material";
// import MyInput from "../general/inputField";
// import axios from "axios";
// import { Form, useFieldArray, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import MySelect from "../general/selcetField";
// import { addRecipe } from "../store/action";

// export const DifficultyLevel = [
//     {
//         Id: '1',
//         Name: 'קלה',
//     },
//     {
//         Id: '2',
//         Name: 'בינונית',
//     },
//     {
//         Id: '3',
//         Name: 'קשה',
//     },
// ];
// //TODO: 1. יש בעיה עם תיבת הבחירה
// // 2. Warning: validateDOMNesting(...): <form> cannot appear as a descendant of <form>
// // 3. הוספת חומרים
// // 4. הוספת הוראה
// function AddRecipe() {
//     const recipeSchema = yup.object({
//         RecipeName: yup.string().required("זהו שדה חובה"),
//         Difficulty: yup.string().required("זהו שדה חובה"),
//         Duration: yup.number().positive("משך זמן צריך להיות מספר חיובי").required("משך זמן ההכנה בערך. זהו שדה חובה"),
//         Description: yup.string().required("תיאור המתכון. זהו שדה חובה"),
//         Category: yup.string().required("זהו שדה חובה"),
//         Img: yup.string().url("קישור URL של התמונה").nullable(),
//         Ingredients: yup.array().of(
//             yup.object().shape({
//                 Count: yup.number("כמות חייבת להיות מספר").positive("כמות חייבת להיות חיובית").required("זהו שדה חובה"),
//                 Type: yup.string().required("זהו שדה חובה. סוג הכמות (כפות, כוסות, חבילות, גרם וכו')"),
//                 Name: yup.string().required("זהו שדה חובה"),
//             })
//         ),
//         Instructions: yup.array().of(
//             yup.object().shape({
//                 Instruction: yup.string().required("יש להכניס הוראה. זהו שדה חובה")
//             })
//         ),
//     }).required();
//     const { register, reset, trigger, setErrorregister, handleSubmit, formState: { errors }, control } = useForm({ resolver: yupResolver(recipeSchema) });
//     const { fields: fieldsIng, append: appendIng, remove: removeIng } = useFieldArray({
//         control,
//         name: "Ingredient"
//     })
//     const { fields: fieldsInstruction, append: appendInstruction, remove: removeInstruction } = useFieldArray({
//         control,
//         name: "Instruction"
//     })
//     const appendIngredient = () => {
//         //לבדוק האם השדות מלאים
//         appendIng({});
//     }
//     const onSubmit = (data) => {
//         console.log(data);
//         addRecipe(data);
//     };
//     return <>
//         <Form onSubmit={handleSubmit(onSubmit)} control="">
//             <MyInput name="RecipeName" register={register} errors={errors} label="שם המתכון" />
//             <MyInput name="Description" register={register} errors={errors} label="תיאור" />
//             <MyInput name="Duration" register={register} errors={errors} label="זמן הכנה" helpertext="מס' הדקות" />
//             <MySelect name="Difficulty" register={register} errors={errors} label="רמת קושי" options={DifficultyLevel} />
//             <MySelect name="Category" register={register} errors={errors} label="קטגוריה" options={DifficultyLevel} />
//             <MyInput name="Img" register={register} errors={errors} label="תמונה" helpertext="תמונה של המתכון" />
//             <Button variant="contained" onClick={() => appendIng({})}>הוסף מוצר</Button>
//             {fieldsIng.map((field, index) => {
//                 <>
//                     {console.log("field, ", field)}
//                     {console.log("field.value ", field.value)}
//                     {console.log("field.id ", field.id)}
//                     {console.log(`Ingredients.${index}.Count`)}
//                     {console.log(register(`Ingredients.${index}.Count`))}
//                     <div>fdafda</div>
//                     <div key={field.id}>
//                         <input type="text" placeholder="product name:" {...register(`Ingrident.${index}.Name`)} />
//                         <input {...register(`Ingredients.${index}.Count`)} placeholder="bal bla" />
//                         <MyInput name={`Ingredients.${index}.Count`} register={register} errors={errors} label="כמות" />
//                         <MyInput name={`Ingredients.${index}.Type`} register={register} errors={errors} label="סוג כמות" />
//                         <MyInput name={`Ingredients.${index}.Name`} register={register} errors={errors} label="שם" />
//                         <Button variant="contained" onClick={() => removeIng(index)}>מחק מוצר</Button>
//                     </div>
//                 </>
//             })}
//             {fieldsInstruction.map((field, index) => (
//                 <div key={field.id}>
//                     <MyInput name="Instruction" register={register} errors={errors} label="הוראה" />
//                     <Button variant="contained" onClick={appendInstruction({ Name: "", Count: 0, Type: "" })}>הוסף הוראה</Button>
//                     <Button variant="contained" onClick={removeInstruction({})}>מחק הוראה</Button>
//                 </div>
//             ))}
//             <Input type="submit" />
//             {/* style={{ 'text-align': 'start' }}  */}
//         </Form >
//     </>;

// }
// export default AddRecipe;




// import Test_fieldArray from '../Test_fieldArray'
import { useFieldArray, useForm} from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import * as yup from "yup"
// import 'semantic-ui-css/semantic.min.css'
import { useSelector, useDispatch } from "react-redux";
// import { FormField } from 'semantic-ui-react'
import { Button, Input, Stack } from "@mui/material"
import MyInput from "../general/inputField"
// import SendIcon from '@mui/icons-material/Send';

export default (prop) => {

    const schema = yup
        .object({
            Name: yup.string().required("זהו שדה חובה"),
            CategoryId: yup.number().required("זהו שדה חובה"),
            Img: yup.string("קישור URL").required("זהו שדה חובה"),
            Duration: yup.number().required(),
            Difficulty: yup.number().required(),
            Description: yup.string().required(),
            Instructions: yup.array().of(yup.object({ Inst: yup.string().required(), })).required("זהו שדה חובה"),
            Ingrident: yup.array().of(yup.object({
                Name: yup.string().required("זהו שדה חובה"),
                Count: yup.number().required("זהו שדה חובה"),
                Type: yup.string().required("זהו שדה חובה"),
            })).required("זהו שדה חובה")
        })
        .required()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resipes = useSelector(state => state.recipes);
    const userId = useSelector(state => state.user.user?.Id)
    const { state } = useLocation()
    const selectRecipe = state;
    const Name = state?.Name;
    const Img = state?.Img;
    const Duration = state?.Duration;
    const Difficulty = state?.Difficulty;
    const Description = state?.Description;
    const CategoryId = state?.CategoryId;

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        values: { Name, CategoryId, Img, Duration, Difficulty, Description }

    })
    const { fields: Instructions, append: appendInstruction, remove: removeInstruction } = useFieldArray({
        control, name: "Instructions"
    });
    const { fields: Ingredient, append: appendIngrident, remove: removeIngrident } = useFieldArray({
        control, name: "Ingrident"
    });
    const onSubmit = (data) => {
        if (data.Instructions == undefined)
            ;
        if (data.Ingredient == undefined)
            ;
        // console.log("submit:", data);
        // console.log();
        // console.log("Name: ", data.Name);
        var instructions = "";
        var comma = false;
        data.Instructions.map(ins => {
            if (!comma)
                comma = true;
            else
                instructions += ",";
            instructions += `"${ins.Inst}"`;
            console.log(ins.Inst);
        })
        var ingredients = "";
        comma = false;
        data.Ingrident.map(ing => {
            if (!comma)
                comma = true;
            else
                ingredients += ",";
            ingredients += `{"Name":"${ing.Name}","Count":"${ing.Count}","Type":"${ing.Type}"}`;
        })
        // console.log("Instructions: ", instructions);
        // console.log("Difficulty", data.Difficulty);
        // console.log("Duration", data.Duration);
        // console.log("UserId", userId);
        // console.log("CategoryId", data.CategoryId);
        // console.log("Img", data.Img);
        // console.log("Description", data.Description);
        // console.log("Ingrident", ingredients);
        // if (prop == false) {
        //     axios.post('http://localhost:8080/api/recipe', data).then((response) => {
        //         console.log(response);
        //         console.log(data);
        //         dispatch({ type: "ADD_RECIPE", data: data })
        //     })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        // }
        // else {
        const obj = JSON.parse(`{"Name":"${data.Name}","Instructions":[${instructions}],"Difficulty":"${data.Difficulty}","Duration":"${data.Duration}","UserId":"${userId}","CategoryId":"${data.CategoryId}","Img":"${data.Img}","Description":"${data.Description}","Ingrident":[${ingredients}]}`.replace(/[\r\n]/gm, ' '));
        axios.post('http://localhost:8080/api/recipe',
            obj
            // "Name": "matcon", "Instructions": ["first instruction", "second instruction"], "Difficulty": "3 קלה ", "Duration": "3 hours", "UserId": 1, "CategoryId": 2, "Img": "image.com", "Description": "description", "Ingrident": [{ "Name": "name ingredient 1", "Count": "3", "Type": "gram" }, { "Name": "name ingredient 2", "Count": "5.5", "Type": "boxes" }]
            // "Name": data.Name,
            // "Instructions": instructions,
            // "Difficulty": data.Difficulty,
            // "Duration": data.Duration,
            // "UserId": userId,
            // "CategoryId": data.CategoryId,
            // "Img": data.Img,
            // "Description": data.Description,
            // "Ingrident": ingredients
        ).then((res) => {
            console.log("add secceedded!!!!!!!!!!!!!!!!!!!!!!!!", res);
            dispatch({ type: "ADD_RECIPE", payload: res.payload })
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <label>Recipe Name: </label> */}
                {/* <input type="text" placeholder="Recipe name" {...register("Name")} /> */}
                {/* <p>{errors.Name?.message}</p> */}
                <MyInput type="text" name="Name" register={register} errors={errors} label="שם המתכון" />

                {/* <label>Description:</label> */}
                {/* <input placeholder="Description" type="text" {...register("Description")} /> */}
                {/* <p>{errors.Description?.message}</p> */}
                <MyInput type="text" name="Description" register={register} errors={errors} label="תיאור" />

                <label>CategoryId: </label>
                <input type="select" placeholder="CategoryId" {...register("CategoryId")} />
                <p>{errors.CategoryId?.message}</p>

                {/* <label>Img: </label> */}
                {/* <input placeholder="Img URL" {...register("Img")} /> */}
                {/* <p>{errors.Img?.message}</p> */}
                <MyInput type="text" name="Img" register={register} errors={errors} label="URL קישור לתמונה" />

                {/* <label>Duration: </label> */}
                {/* <input placeholder="Duration" {...register("Duration")} /> */}
                {/* <p>{errors.Duration?.message}</p> */}
                <MyInput type="text" name="Duration" register={register} errors={errors} label="זמן הכנה (בדקות)" />

                <label>Difficulty:</label>
                <input placeholder="Difficulty"{...register("Difficulty")} />
                <p>{errors.Difficulty?.message}</p>
                {/* <MyInput type="text" name="Difficulty" register={register} errors={errors} label="רמת קושי"/> */}

                <div>
                    <label>Products:</label>
                    {Ingredient?.map((item, index) => (
                        <div key={index} >
                            <MyInput type="text" name={`Ingrident.${index}.Name`} register={register} errors={errors} label="שם מוצר" box={false} />
                            <MyInput type="number" name={`Ingrident.${index}.Count`} register={register} errors={errors} label="כמות" box={false} />
                            <MyInput type="text" name={`Ingrident.${index}.Type`} register={register} errors={errors} label="סוג הכמות" box={false} />
                            <Button variant="contained" onClick={() => removeIngrident(index)}>מחק מוצר</Button>
                        </div>
                    ))}
                </div>

                <Button variant="contained" onClick={() => appendIngrident({ Name: "", Count: 0, Type: "" })}>הוסף מוצר</Button>
                <Button variant="contained" onClick={() => appendInstruction({ Inst: "" })}>הוסף הוראה</Button>
                <div>
                    <label>Instructions:</label>
                    {Instructions?.map((item, index) => (
                        <div key={index}>
                            <MyInput type="text" name={`Instructions.${index}.Inst`} register={register} errors={errors} label={`${index + 1}.`} multiline={true} />
                            <Button variant="contained" onClick={() => removeInstruction(index)}>מחק הוראה</Button>
                        </div>
                    ))}
                </div>
                <Input type="submit" />
                {/* <input type="text" placeholder="product name:" {...register(`Ingrident.${index}.Name`)} /> */}
                {/* <input type="number" placeholder="count:" {...register(`Ingrident.${index}.Count`)} /> */}
                {/* <input type="text" placeholder="type:" {...register(`Ingrident.${index}.Type`)} /> */}
                {/* <input type="text" placeholder="enter Instruction:" {...register(`Instructions.${index}.Inst`)} /> */}
                {/* <button onClick={() => appendIngridents({ Name: "", Count: 0, Type: "" })}>add product</button> */}
                {/* <button onClick={() => appendInstructions({ Inst: "" })}>add Instruction</button> */}
                {/* <input type="submit" onClick={() => { onSubmit() }} /> */}
            </form>
        </>
    );
}
