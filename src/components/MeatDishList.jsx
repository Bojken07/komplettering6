import React from 'react';
import { Link } from 'react-router-dom';
import { meatDishes } from '../data';

const MeatDishList = () => {
    return (
        <div>
            <h1>Lista med Kötträtt</h1>
            <div className="card-container">
                {meatDishes.map(dish => (
                    <div key={dish.id} className="card">
                        <h2><Link to={`/dish/${dish.id}`}>{dish.name}</Link></h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeatDishList;
