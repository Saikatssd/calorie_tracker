import React, { useState } from 'react';

function Food() {
    const [foodName, setFoodName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [consumedItems, setConsumedItems] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleFoodNameChange = (event) => {
        setFoodName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.nutritionix.com/v1_1/search/${foodName}?results=0:1&fields=item_name,brand_name,item_id,nf_calories,nf_serving_weight_grams,images_front_small_url&appId=44f6841f&appKey=332b39aa63ab4059a2b92f51a8712037`)
            .then((response) => response.json())
            .then((data) => {
                const caloriesPer100g = (data.hits[0].fields.nf_calories / data.hits[0].fields.nf_serving_weight_grams) * 100;
                const item = {
                    name: data.hits[0].fields.item_name,
                    quantity,
                    calories: caloriesPer100g,
                    image: data.hits[0].fields.images_front_small_url
                };
                setConsumedItems([...consumedItems, item]);
                setTotalCalories(totalCalories + (caloriesPer100g * (quantity)/100));
                setFoodName('');
                setQuantity('');
            });
    };


    return (
        <div className='container'>
            <div className="food-container">
                <div className="food-box">

                    <form onSubmit={handleSubmit}>
                        <label>
                            Food Name:
                            <input type="text" value={foodName} onChange={handleFoodNameChange} />
                        </label>
                        <label>
                            Quantity (in gm):
                            <input type="text" value={quantity} onChange={handleQuantityChange} />
                        </label>
                        <button className='submit-btn' type="submit">Submit</button>
                    </form>
                    <h2>Total Calories : {totalCalories}</h2>
                    <ul>
                        {consumedItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.quantity}</p>
                                    <p>{item.calories} calories</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="food-box">
                    <a href="https://caloriecontrol.org/healthy-weight-tool-kit/food-calorie-calculator/" target="_blank">
                        <h4 className='food-click-here'>For More Details Click here</h4>
                        <iframe src="https://caloriecontrol.org/healthy-weight-tool-kit/food-calorie-calculator/" frameborder="0"></iframe>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Food;
