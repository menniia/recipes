

const Recipe = ({ recipe }) => {
    return (
        <div>
            <span>
                <h3>{recipe.name}</h3>
                <div>
                    <img src={recipe.img} alt="" />
                </div>
            </span>
        </div>
    )
}

export default Recipe;