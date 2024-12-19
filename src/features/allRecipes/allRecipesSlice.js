import { createSlice } from "@reduxjs/toolkit";
import allRecipesData from "../../app/data";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const initialState = allRecipesData;

const allRecipesSlice = createSlice({
    name: "allRecipes",
    initialState,
    reducers: {
        loadData(state) {
            state.length = 0;
            state.push(...allRecipesData);
        },
        addFavoriteFromOtherSlice(state, action) {
            state.push(action.payload);
        },
        removeFavoriteFromOtherSlice(state, action) {
            const indexToRemove = state.findIndex(recipe => recipe.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        },
    },
});


// Selectors
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const { loadData, addFavoriteFromOtherSlice, removeFavoriteFromOtherSlice } = allRecipesSlice.actions;
export default allRecipesSlice.reducer

