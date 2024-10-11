import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { loadData } from "./allRecipesSlice";
import { useEffect } from "react";


const AllRecipes = ({ dispatch, allRecipes }) => {

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe))
    }

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch])

    return (
        <div className="recipes-container">
            {allRecipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton icon={faHeart} onClickHandler={() => onAddRecipeHandler(recipe)}>
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    )
}

export default AllRecipes;