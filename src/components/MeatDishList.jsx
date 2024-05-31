import React from 'react';
import { Link } from 'react-router-dom';
import { meatDishes } from '../data';

const MeatDishList = () => {
    return (
        <div>
            <h1>Lista med Kötträtt</h1>
            <ul>
                {meatDishes.map(dish => (
                    <li key={dish.id}>
                        <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeatDishList;
