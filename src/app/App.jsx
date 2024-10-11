import AllRecipes from "../features/allRecipes/AllRecipes";
import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes";
import SearchTerm from "../features/searchTerm/SearchTerm";
import { getFilteredRecipe } from "../utils/utils";


function App({ state, dispatch }) {

    const visibleAllRecipes = getFilteredRecipe(
        state.allRecipes,
        state.searchTerm
    )

    const visibleFavoriteRecipes = getFilteredRecipe(
        state.favoriteRecipes,
        state.searchTerm
    )

    return (
        <main>

            <section>
                <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
            </section>

            <section>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes favoriteRecipes={visibleFavoriteRecipes} dispatch={dispatch} />
            </section>

            <hr />

            <section>
                <h1>All Recipes</h1>
                <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
            </section>

        </main>
    )
}

export default App;