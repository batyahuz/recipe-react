import axios from "axios";
import { useSelector } from "react-redux";

export const SET_USER = "SET_USER";
export const RELOAD = "RELOAD";

export const ADD_RECIPE = "ADD_RECIPE";
export const SET_RECIPES = "SET_RECIPES";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_CATEGORY = "ADD_CATEGORY";

// export const getRecipe=()=>{
//     return despatch=>{
//         dispatch({type:"RELOAD"})
//         axios.get("")
//     }
// }
export const addRecipe = (data) => {
    const userId = useSelector(state => state.user.id);
    return dispatch => {
        // dispatch({ type: "ADD_RECIPE" })
        axios.post("http://localhost:8080/api/recipe", {
            "Name": data.RecipeName,
            "Instructions": data.Instructions,
            "Difficulty": data.Difficulty,
            "Duration": data.Duration,
            "Description": data.Description,
            "UserId": userId,
            "CategoryId": data.Category,
            "Img": data.Img,
            "Ingredient": data.Ingredients
        }).then(res => {
            dispatch({ type: "ADD_RECIPE", payload: res.data });
            console.log(res);
            console.log(res.data);
            // navigate(`/home`);
        }).catch(err => {
            console.log(err);
            alert(err.response.data);
        });
    }
}


export const setUser = () => {
    return dispatch => {
        dispatch({ type: "RELOAD" })
        axios.post('http://localhost:8080/api/user/login').then((res) => {
            dispatch({ type: 'SET_USER', pylaod: res.data })
            navigate("/home");
        })
    }
}
