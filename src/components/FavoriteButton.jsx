import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FavoriteButton = ({ icon, onClickHandler, children }) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <FontAwesomeIcon className="heart-icon" icon={icon} />
            {children}
        </button>
    )
}

export default FavoriteButton;