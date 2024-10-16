import allRecipesData from "../../app/data";


const initialState = [];
const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case "allRecipes/loadData":
            return action.payload
        case "favoriteRecipes/addRecipe":
            return allRecipes.filter(recipe => recipe.id !== action.payload.id)
        case "favoriteRecipes/removeRecipe":
            return [...allRecipes, action.payload]
        default:
            return allRecipes
    }
}

const loadData = () => {
    return {
        type: "allRecipes/loadData",
        payload: allRecipesData
    }
}

export { allRecipesReducer, loadData }