import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

// slice object
export const favoriteRecipeSlice = createSlice({
    name: "favoriteRecipes",
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
        },
        removeRecipe: (state, action) => {
            return state.filter((recipe) => recipe.id !== action.payload.id);
        },
    },
});

// selectors
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favoriteRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const { addRecipe, removeRecipe } = favoriteRecipeSlice.actions;
export default favoriteRecipeSlice.reducer;
