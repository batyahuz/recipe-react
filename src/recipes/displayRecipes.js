import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import RecipeCard from "./recipeCard"
import { Link, useNavigate } from "react-router-dom";
import ErrorUserId from "../general-fields/error-userId";

const DisplayRecipes = ({ id, categoryId, durationMin, durationMax, difficultyMin, difficultyMax }) => {
    // const navigation = useNavigate();
    const { recipes } = useSelector(state => ({
        recipes: state.recipes.recipes,
    }));
    // const { recipes2, setRecipes2 } = useState(recipes);
    // const e = useEffect(console.log(recipes2), [setRecipes2]);
    return <>
        {console.log("display recipes component: ", recipes)}
        <div>
            {recipes.map(r => {
                return <>
                    {
                        (!id || id == userId) &&
                        (!categoryId || categoryId == r.CategoryId) &&
                        (!durationMin || durationMin <= r.Duration) &&
                        (!durationMax || durationMax >= r.Duration) &&
                        (!difficultyMin || difficultyMin <= r.Difficulty) &&
                        (!difficultyMax || difficultyMax >= r.Difficulty) &&
                        <RecipeCard recipe={r} />
                    }
                </>
            })}
        </div >
        <Link to={"/addRecipe"}><button>להוספת מתכון</button></Link>
    </>
}
export default DisplayRecipes;