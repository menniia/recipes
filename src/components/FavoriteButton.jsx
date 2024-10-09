import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FavoriteButton = ({ icon, onClickHandler }) => {
    return (
        <button onClick={onClickHandler}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default FavoriteButton;