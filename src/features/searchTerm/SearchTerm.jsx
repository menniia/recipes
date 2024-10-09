import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { clearSearchTerm, setSearchTerm } from "./searchTermSlice";

const SearchTerm = ({ searchTerm, dispatch }) => {

    const onSearchTermChangeHandler = (event) => {
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput))
    }

    const onClearSearchHandler = () => {
        dispatch(clearSearchTerm())
    }


    return (
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search for recipes"
            />
            {searchTerm.length > 0 && (
                <button
                    type="button"
                    onClick={onClearSearchHandler}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            )}
        </div>
    )
}

export default SearchTerm