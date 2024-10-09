const initialState = [];
const favoriteRecipeReducer = (favoriteRecipes = initialState, action) => {
    switch (action.type) {
        case "favoriteRecipes/addRecipe":
            return [...favoriteRecipes, action.payload]
        case "favoriteRecipes/removeRecipe":
            return favoriteRecipes.filter(recipes => recipes.id !== action.payload.id)
        default:
            return favoriteRecipes
    }
}

const addRecipe = (recipe) => {
    return {
        type: "favoriteRecipes/addRecipe",
        payload: recipe
    }
}

const removeRecipe = (recipe) => {
    return {
        type: "favoriteRecipes/removeRecipe",
        payload: recipe
    }
}

export { favoriteRecipeReducer, addRecipe, removeRecipe }