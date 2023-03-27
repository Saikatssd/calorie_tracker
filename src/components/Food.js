import React from 'react'
import './style.css';


export default function Food() {
    return (
        <div className='container'>
            <form action="/action_page.php">
                Food Name/Type:
                <input type="search" name="food search" />
                <input type="submit" name="search" />
            </form>
            <table>
                <tr>
                    <th >Recently Eaten:</th>
                    <th ></th>
                    <th >Newly Eaten:</th>
                    <th ></th>
                </tr>
                <tr>
                    <td>
                        <img className='food-image'src="https://s3-media3.fl.yelpcdn.com/bphoto/TGFfINlc05G-uqiTLNmUww/o.jpg" alt="Mountain" />
                    </td>&nbsp;

                    <td>
                        <p><a
                            href="https://www.google.com/search?espv=2&q=papa+john%27s+pizza+buffalo+chicken+pizza&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIoKctV4tVP1zc0TEo2NCs2NSrRUs5OttJPy89P0c9NzSuNLyjKL8tMSS2yAvNS80qKMlOLHzEWcQu8_HFPWCpz0pqT1xiTuYjRJWTDxeaaV5JZUikkw8UrhXCCBoMUNxeCKyWiJcRZ-rYx5-zG9H7BgKU96v5G027yAAA1-MKEtgAAAA&sa=X&ved=0ahUKEwiSjtbfhKrTAhUk2IMKHe1-BBUQri4ILg">Papa
                            John's Buffalo Chicken Pizza</a><br /><br />Eaten by Sandeep</p>
                    </td>

                    <td>
                        <img className='food-image'src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmPncANdouq0BXFTGuF5lgPlXqKDtkY5vs5H1bmDXLbDcyds41"
                            alt="Mountain" />

                    </td>&nbsp;

                    <td>
                        <p><a href="https://www.mcdonalds.com/us/en-us/product/chicken-mcnuggets-4-piece.html">mcdonalds Chicken
                            Nuggets</a><br /><br />Submitted by Sandeep</p>
                    </td>
                </tr>
                <tr>
                    <td><br />
                        <img className='food-image'src="https://cdn-starbucks.netdna-ssl.com/uploads/images/_framed/T8roeBHm-4500-3000.JPG"
                            alt="Mountain" />

                    </td>&nbsp;

                    <td>
                        <p><a
                            href="https://www.starbucks.com/menu/drinks/frappuccino-blended-beverages/java-chip-frappuccino-blended-beverage">Starbucks
                            - Java chip</a><br /><br />Eaten by Rupanandha</p>
                    </td>

                    <td>
                        <img className='food-image'src="http://www.kfc.ca/menuImage.axd?Name=Dipper&Section=Boxed&type=modal" alt="Mountain"
                        />

                    </td>&nbsp;

                    <td>
                        <p><a href="https://www.kfc.com/menu/meals/big-box-meals">KFC - Big box meal</a><br /><br />Submitted by
                            Vamsi Nagendra</p>
                    </td>
                </tr>
                <tr>
                    <td><br />
                        <img className='food-image'src="https://d17840adovynop.cloudfront.net/wp-content/uploads/2014/03/chick-fil-a-secret-menu-meal.jpg"
                            alt="Mountain" />

                    </td>&nbsp;

                    <td>
                        <p><a
                            href="https://www.chick-fil-a.com/Menu-Items/Chick-fil-A-Chicken-Sandwich">Chick-fil-A-Chicken-Sandwich</a><br /><br />Eaten
                            by Vamsi Nagendra</p>
                    </td>

                    <td>
                        <img className='food-image'src="http://www.bk.com/sites/default/files/GardenGrilledChickenSalad_Thumbnail_v4_0.jpg"
                            alt="Mountain" >
                        </img>
                    </td>&nbsp;

                    <td>
                        <p><a href="http://www.bk.com/menu/salads_n_veggies">Burger King - Garden Green
                            Salad</a><br /><br />Submitted by Rupanandha</p>
                    </td>
                </tr>

                <tr>
                    <td><br />
                        <img className='food-image'src="https://www.einsteinbros.com/images/logo-einstein-social.png" alt="Mountain"
                        />

                    </td>&nbsp;

                    <td>
                        <p><a href="https://www.einsteinbros.com/images/docs/EBB_Nutrition.pdf">EinsteinBro's - Egg Bagel
                            Sandwich</a><br /><br />Eaten by Varshitha</p>
                    </td>

                    <td>
                        <img className='food-image'src="https://lh5.ggpht.com/wqINPLbIUx0Yu2QMBjsMls4ajGHUy3YkCKa90OfDR807T-MaSrwEtSs4TTTDIeMcDVQU9Xh5k7cicglp9U7q=s400"
                            alt="Mountain" />
                    </td>&nbsp;

                    <td>
                        <p><a
                            href="https://www.sonicdrivein.com/menu/168-snacks-sides/items/453-chili-cheese-natural-cut-fries">Sonic
                            - Chilli Cheese Cut Fries</a><br /><br />Submitted by Varshitha</p>
                    </td>
                </tr>
            </table>

        </div>
    )
}


// import React, { useState } from 'react';
// import axios from 'axios';

// const Food = () => {
//   const [food, setFood] = useState('');
//   const [calories, setCalories] = useState(0);
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
//   const [totalCalories, setTotalCalories] = useState({});
//   const [tableData, setTableData] = useState([]);

//   const handleInputChange = (event) => {
//     setFood(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=0MpvxVBZGaYJm8Ia0J7w5oqTOj63n935m618ihOY&query=${food}`)
//       .then((response) => {
//         setCalories(response.data.foods[0].foodNutrients[1].value);
//         setTotalCalories((prev) => ({
//           ...prev,
//           [date]: (prev[date] || 0) + response.data.foods[0].foodNutrients[1].value,
//         }));
//         setTableData((prev) => [
//           ...prev,
//           { date: date, food: food, calories: response.data.foods[0].foodNutrients[1].value },
//         ]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="food">Enter a food:</label>
//         <input type="text" id="food" value={food} onChange={handleInputChange} />
//         <label htmlFor="date">Enter a date:</label>
//         <input type="date" id="date" value={date} onChange={handleDateChange} />
//         <button type="submit">Add</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Food</th>
//             <th>Calories</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.date}</td>
//               <td>{item.food}</td>
//               <td>{item.calories}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total calories consumed:</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Calories</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(totalCalories).map(([date, calories]) => (
//             <tr key={date}>
//               <td>{date}</td>
//               <td>{calories}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Food;
