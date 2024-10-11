
const getFilteredRecipe = (recipes, searchTerm) => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}


export { getFilteredRecipe };