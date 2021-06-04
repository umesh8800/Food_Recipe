import React from 'react';
import './RecipeTile.css';

function Recipe({recipe}) {
    return (
        <div className='recipeTile'>
            <img src={recipe["recipe"]["image"]} className="recipeTile_img"/>
            <p className="recipeTile_name" > {recipe["recipe"] ["label"]} </p>
            
        </div>
    )
}

export default Recipe
