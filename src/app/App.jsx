import SearchTerm from "../features/searchTerm/SearchTerm";


function App({ state, dispatch }) {
    return (
        <main>
            <section>
                <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
            </section>

            <section>
                <h2>Favorite Recipes</h2>
            </section>
            <hr />
            <section>
                <h1>All Recipes</h1>

            </section>

        </main>
    )
}

export default App;