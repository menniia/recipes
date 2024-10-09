import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { setSearchTerm } from "./searchTermSlice";

const SearchTerm = ({ searchTerm, dispatch }) => {

    const onSearchTermChangeHandler = (event) => {
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput))

    }


    return (
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
            />
        </div>
    )
}

export default SearchTerm