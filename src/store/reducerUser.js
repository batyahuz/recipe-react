import * as actionType from './action'

const initialState = {
    name: "",
    id: null,
    reload: false
}
//     // recipes: axios.get('http://localhost:8080/api/recipe'),
//     // userId: null,//axios.post('http://localhost:8080/api/user/login'),

// }
///// טופס הרשמה/כניסה ב onSubmit
//// קריאת שרת שהמשתמש קיים /להוסיף משתמש 
////.then((res)=>dispatch({type:"GET_RECIPE", payload:res.data}))
function UserReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_USER: {

            return { ...state, user: action.user }
        }
        default: {
            return { ...state }
        }
    }
}
export default UserReducer;
// function reducer(state = global, action) {
//     switch (action.type) {
//         case actionType.ADD_CATEGORY:
//             {
//                 const categories = [...state.categories]
//                 categories.push(action.category);
//                 return ({
//                     ...state,
//                     categories
//                 })
//             }
//         case actionType.ADD_RECIPE:
//             {
//                 const recipies = [...state.recipies];
//                 recipies.push(action.pylaod);
//                 return ({
//                     ...state,
//                     recipies
//                 })
//             }
//         case actionType.DELETE_RECIPE:
//             {
//                 const recipies = [...state.recipies];
//                 recipies = recipies.filter(r => r.Id !== action.recipeId);
//                 return ({
//                     ...state,
//                     recipies
//                 })
//             }
//         case actionType.EDIT_RECIPE:
//             {
//                 const recipies = [...state.recipies];
//                 const index = recipies.findIndex(r => r.Id = action.pylaod.Id);
//                 recipies[index] = action.pylaod;
//                 return ({
//                     ...state,
//                     recipies
//                 })

//             }
//         case actionType.SET_RECIPE:
//             return ({
//                 ...state,
//                 recipe: action.recipe
//             })
//         case actionType.SET_USER:
//             return ({
//                 ...state,
//                 user: action.pylaod
//             })
//         default: return ({ ...state });
//     }
// }
// export default reducer;