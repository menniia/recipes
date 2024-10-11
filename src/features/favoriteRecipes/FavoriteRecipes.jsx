import { faX } from "@fortawesome/free-solid-svg-icons";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { removeRecipe } from "./favoriteRecipesSlice";


const FavoriteRecipes = ({ favoriteRecipes, dispatch }) => {

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe))
    }

    const renderRecipe = (recipe) => {

        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton onClickHandler={() => onRemoveRecipeHandler(recipe)} icon={faX}>
                    Remove from Favorites
                </FavoriteButton>
            </Recipe>
        )
    }

    return (
        <div id="favorite-recipes" className="recipes-container">
            {favoriteRecipes.map(renderRecipe)}
        </div>

    )

}


export default FavoriteRecipes;