import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import RecipeCard from "./recipeCard"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorUserId from "../general-fields/error-userId";

const DisplayRecipes = ({ id = -1 }) => {
    // const navigation = useNavigate();
    const { recipes, userId } = useSelector(state => ({
        recipes: state.recipes.recipes,
        userId: state.user.id
    }));
    // const { recipes2, setRecipes2 } = useState(recipes);
    // const e = useEffect(console.log(recipes2), [setRecipes2]);
    return <>
        {console.log("display recipes component: ", recipes)}
        {
            userId == undefined ?
                <ErrorUserId />
                :
                <>
                    <div>
                        {recipes.map(r => {
                            return <>
                                {
                                    (id == -1 || id == userId) &&
                                    <RecipeCard recipe={r} />
                                }
                            </>
                        })}
                    </div >
                    <Link to={"/addRecipe"}><button>להוספת מתכון</button></Link>
                </>
        }
    </>
}
export default DisplayRecipes;