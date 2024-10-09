import { faX } from "@fortawesome/free-solid-svg-icons";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";


const AllRecipes = ({ dispatch, allRecipes }) => {

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe))
    }
    return (
        <div>
            {allRecipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton icon={faX} onClickHandler={() => onAddRecipeHandler(recipe)}>
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    )
}

export default AllRecipes;