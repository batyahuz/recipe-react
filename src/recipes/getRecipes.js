import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Recipe from "./displayRecipe"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetRecipes = () => {
    
    // const navigation = useNavigate();
    // const { recipes, userId } = useSelector(state => ({
    //     recipes: state.recipes.recipes,
    //     userId: state.user.id
    // }));
    // const { recipes2, setRecipes2 } = useState(recipes);
    // const e = useEffect(console.log(recipes2), [setRecipes2]);
    return <>
        <div>get recipes</div>
        {/* <div>{recipes}</div>
        {recipes?.array?.map(r => {
            <div>
                {r.id === userId && <button>ערוך</button> && <button>מחק מתכון</button>}
                {/* <div><Recipe recipe={r} /></div> */}
        {/* </div> */}
        {/* })} */}
    </>
}
export default GetRecipes;