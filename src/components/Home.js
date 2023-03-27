import React from 'react'
import { Link } from 'react-router-dom';
import Bmi from './Bmi';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from 'react-router-dom';

export default function Home() {
  // function linkHtml() {
  //   return (
  //     <div>
  //       <Bmi />
  //       {/* <Router>

  //         <Routes>
  //           <Route path='/bmi' element={<Bmi />} />
  //         </Routes>

  //       </Router> */}
  //     </div>
  //   )
  // }

  return (
    <div className='container'>
      <marquee behavior="" direction="left"> Want to know your BMI? &nbsp;<Link to="/calorie_tracker/bmi"><button className='bmi-btn' >Click Me</button></Link></marquee>
      <h1 className="heading">Calorie Counter:</h1>


      <div className="home-descrip">
        <p>
          A calorie counter is a way to count your daily caloric intake using our easy to use caloric counter.
          Calorie counting is
          an easy way for you to manage your weight. If you have a daily caloric requirement that you want to
          meet, or
          you need to monitor your caloric intake, our calorie counting technique is for you. Our calorie chart is
          easy
          to read, and you can easily count the calories in food that you eat.</p>
        <p> <br />
          <b>Food Intake:</b> in order to reduce your weight and remove unwanted calories, you are supposed to
          follow a
          regulated and healthy food intake. this will allow you to be fit and fine.
        </p><br />
        <p><b>Exercise:</b> along with food, you need to follow few regular exercises which will allow you to be fit
          and gives
          mental relaxation. Calories are calculated using these exercises. try to increase the time spent on each
          exercise
          for every day.</p>
        <br />
        <p><b>What is a Calorie?</b></p>
        <p>
          In a nutritional context, the kilojoule (kJ) is the SI unit of food energy, although the kilocalorie is
          still in common use.
          The word calorie is popularly used with the number of kilocalories of nutritional energy measured. As if
          to avoid
          confusion, it is sometimes written Calorie (with a capital "C") in an attempt to make the distinction,
          although
          this is not widely understood. Capitalization contravenes the rule that the initial letter of a unit
          name or
          its derivative shall be lower case in English.</p>
        <p>
          To facilitate comparison, specific energy or energy density figures are often quoted as "calories per
          serving" or "kilocalories
          per 100 g". A nutritional requirement or consumption is often expressed in calories per day. One gram of
          fat
          in food contains nine kilocalories, while a gram of either a carbohydrate or a protein contains
          approximately
          four kilocalories. Alcohol in a food contains seven kilocalories per gram.</p>
      </div>
    </div>
  )
}
