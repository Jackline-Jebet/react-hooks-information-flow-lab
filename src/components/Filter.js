import React from 'react';

function Filter({onCategoryChange}) {
    return (
        <div className="filter">
         <select name='filter' onChange={onCategoryChange}> 
            <option value="All">Filter by category</option>
            <option value="Produce">produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option> 
             </select>   
        </div>
    );
}

export default Filter;