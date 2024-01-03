import axios from "axios";
import { useSelector } from "react-redux";

export const SET_USER = "SET_USER";
export const RELOAD = "RELOAD";

export const ADD_RECIPE = "ADD_RECIPE";
export const SET_RECIPES = "SET_RECIPES";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";


const printError = ({ err }) => {
    console.log(err);
    if (err?.response?.data != undefined)
        alert(err.response.data);
}

export const addRecipe = (data) => {
    const userId = useSelector(state => state.user.id);
    return dispatch => {
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
        }).catch(err => { printError(err); });
    }
}


export const setUser = () => {
    return dispatch => {
        dispatch({ type: "RELOAD" })
        axios.post('http://localhost:8080/api/user/login').then((res) => {
            dispatch({ type: 'SET_USER', pylaod: res.data })
        }).catch((err) => { printError(err); })
    }
}

// export const setCategories = () => {
//     console.log("set categories function()");
//     return dispatch => {
//         axios.get(`http://localhost:8080/api/category`)
//             .then(res => {
//                 dispatch({ type: "SET_CATEGORIES", data: res.data })
//                 console.log("load categories: ", res);
//             })
//             .catch(err => { printError(err); });
//     }
// }

// export const setRecipes = () => {
//     console.log("set recipes function");
//     // return dispatch => {
//     axios.get('http://localhost:8080/api/recipe').then(res => {
//         dispatch({ type: "SET_RECIPES", payload: res.payload })
//         console.log("set recipes: ", res);
//     }).catch(err => { printError(err); });
//     // }
// }

