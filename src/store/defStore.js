import { createStore, combineReducers, applyMiddleware } from 'redux';
import User from "./reducerUser";
import Recipe from './reducerRecipe';

const reducers = combineReducers({
    User: User,
    recipes: Recipe
})

export const store = createStore(reducers, applyMiddleware);