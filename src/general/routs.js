import { Route, Routes } from "react-router-dom";
import Entry from './entry';
import Home from './home'
import LogIn from '../users/login';
import SignIn from '../users/signin';
import AddRecipe from '../recipes/addRecipe';
import DeleteRecipe from '../recipes/deleteRecipe';
import EditRecipe from '../recipes/editRecipe';
import GetRecipes from '../recipes/editRecipe'
import DisplayRecipe from '../recipes/displayRecipe';
import AddCategory from '../categories/addCategory';
import GetCategories from '../categories/getCategories';

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
        <Route path="/getRecipes" element={<GetRecipes />} />
        <Route path="/displayRecipe" element={<DisplayRecipe />} />
        {/* category */}
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/getCategories" element={<GetCategories />} />
    </Routes>
}
export default RoutesComp;