import { Route, Routes } from "react-router-dom";
import Entry from './entry';
import Home from './home'
import LogIn from '../users/login';
import SignIn from '../users/signin';
import AddRecipe from '../recipes/addRecipe';
import DeleteRecipe from '../recipes/deleteRecipe';
import EditRecipe from '../recipes/editRecipe';
import DisplayRecipes from '../recipes/displayRecipes'
// import DisplayRecipe from '../recipes/recipeCard';
import AddCategory from '../categories/addCategory';
import GetCategories from '../categories/getCategories';
import SingleRecipe from "../recipes/singleRecipe";

const RoutesComp = () => {
    return <Routes>
        {/* general */}
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        {/* user */}
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signIn" element={<SignIn />} />
        {/* recipe */}
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/deletRecipe" element={<DeleteRecipe />} />
        <Route path="/editRecipe" element={<EditRecipe />} />
        <Route path="/displayRecipes" element={<DisplayRecipes />} />
        <Route path="/singleRecipe" element={<SingleRecipe />} />
        {/* <Route path="/displayRecipe" element={<DisplayRecipe />} /> */}
        {/* category */}
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/getCategories" element={<GetCategories />} />
    </Routes>
}
export default RoutesComp;