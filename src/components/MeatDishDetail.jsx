import React from 'react';
import { useParams } from 'react-router-dom';
import { meatDishes } from '../data';

const MeatDishDetail = () => {
    const { id } = useParams();
    const dish = meatDishes.find(dish => dish.id === parseInt(id));

    if (!dish) {
        return <h2>Rätt ej hittad</h2>;
    }

    return (
        <div>
            <h1>{dish.name}</h1>
            <h2>Ingredienser</h2>
            <ul>
                {dish.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default MeatDishDetail;
