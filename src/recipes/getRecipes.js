// import { useEffect, useState } from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Recipe from "./displayRecipe"

const GetRecipes = () => {
    const { recipes, userId } = useSelector(state => ({
        recipes: state?.recipes,
        userId: state?.userId
    }));
    // useEffect(console.log(recipes), [])
    return <>
        <div>trying!!!!!!!!!</div>
        <div>{recipes}</div>
        {recipes?.array?.forEach(r => {
            <div>
                {r.id === userId && <button>ערוך</button> && <button>מחק מתכון</button>}
                <div><Recipe recipe={r} /></div>
            </div>
        })}
    </>
}
export default GetRecipes;