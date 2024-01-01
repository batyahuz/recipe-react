import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <Link to="/getRecipes" ><button title="לכל המתכונים">לכל המתכונים</button></Link>
        <Link to="/addRecipe" ><button title="לכל המתכונים">להוסיף מתכון</button></Link>
    </>
}
export default Home;