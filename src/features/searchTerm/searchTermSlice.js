const initialState = "";
const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case "searchTerm/setSearchTerm":
            return action.payload;
        case "searchTerm/clearSearchTerm":
            return "";
        default:
            return state
    }
}

const setSearchTerm = (search) => {
    return {
        type: "searchTerm/setSearchTerm",
        payload: search
    }
}

const clearSearchTerm = (search) => {
    return {
        type: "searchTerm/clearSearchTerm",
        payload: search
    }
}

export { searchTermReducer, setSearchTerm, clearSearchTerm }
