import { useEffect, useState } from "react";
import DisplayRecipes from "./displayRecipes";
import { Slider, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ErrorUserId from "../general-fields/error-userId";

const FilterRecipes = () => {
    const { recipes, userId } = useSelector(state => ({
        recipes: state.recipes.recipes,
        userId: state.user.id
    }));
    const [id, setId] = useState(undefined);
    const [categoryId, setcategoryId] = useState(undefined);
    const [durationMin, setdurationMin] = useState(undefined);
    const [durationMax, setdurationMax] = useState(undefined);
    const [difficultyMin, setdifficultyMin] = useState(undefined);
    const [difficultyMax, setdifficultyMax] = useState(undefined);

    const handleChangeDuration = (event) => {
        const value = event.target.value;
        console.log(value);
        if (value.includes("-")) {
            console.log("in includes");
            const nums = value.split("-");
            console.log("0", nums[0]);
            console.log("1", nums[1]);
            if (nums[0] < nums[1]) {
                setdurationMin(nums[0]);
                setdurationMax(nums[1]);
            }
            else {
                setdurationMin(nums[1]);
                setdurationMax(nums[0]);
            }
        }
        else {
            setdurationMin(value);
            setdurationMax(value);
        }
    }

    const handleChangeDifficulty = (event) => {
        const value = event.target.value;
        console.log(value);
        if (value.includes("-")) {
            const nums = value.split("-");
            // if (nums[0] < nums[1]) {
            //     setdifficultyMin(nums[0]);
            //     setdifficultyMax(nums[1]);
            // }
            // else {
            //     setdifficultyMin(nums[1]);
            //     setdifficultyMax(nums[0]);
            // }
            setdifficultyMin(nums[0]);
            setdifficultyMax(nums[1]);
        }
        else {
            setdifficultyMin(value);
            setdifficultyMax(value);
        }
    }

    return <>
        {
            userId == undefined ?
                <ErrorUserId />
                : <>
                    <TextField
                        id="outlined-search"
                        label="משך זמן הכנה (בדקות)"
                        type="search"
                        helperText="אפשר להזין טווח לדוג' 10-20"
                        onChange={handleChangeDuration}
                    />
                    <TextField
                        id="outlined-number"
                        label={`רמת קושי`}
                        type="search"
                        helperText="אפשר להזין טווח לדוג' 1-2"
                        onChange={handleChangeDifficulty}
                    />
                    <DisplayRecipes id={id} categoryId={categoryId}
                        durationMin={durationMin} durationMax={durationMax}
                        difficultyMin={difficultyMin} difficultyMax={difficultyMax} />
                </>
        }
    </>
}
export default FilterRecipes;