import { createStore, combineReducers } from "redux";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipeReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";


const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipeReducer,
    searchTerm: searchTermReducer
}))

export default store;