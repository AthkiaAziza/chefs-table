import { useEffect } from 'react';
import { useState } from 'react';
import Recipe from '../Recipe/Recipe';




const Recipes = ({handleAddToBookmark}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2'>
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleAddToBookmark={handleAddToBookmark}></Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;