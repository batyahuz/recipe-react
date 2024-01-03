import { Link } from "react-router-dom";
import ArrowTitle from "../general-fields/arrow-title";

const Home = () => {
    return <>
        <Link to="/displayRecipes" ><ArrowTitle title="לכל המתכונים" container={<button>לכל המתכונים</button>} /></Link>
        <Link to="/addRecipe" ><ArrowTitle title="לכל המתכונים" container={<button>להוסיף מתכון</button>} /></Link>
    </>
}
export default Home;