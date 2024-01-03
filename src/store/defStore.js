import { createStore, combineReducers, applyMiddleware } from 'redux';
import User from "./reducerUser";
import Recipe from './reducerRecipe';
import Category from './reducerCategory';

const reducers = combineReducers({
    user: User,
    recipes: Recipe,
    categories: Category
})
const store = createStore(reducers);

export default store