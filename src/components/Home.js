import React from 'react'
import { Link } from 'react-router-dom';
import Bmi from './Bmi';


export default function Home() {


  return (
    <div className='container'>
      <marquee behavior="" direction="left"><Link to="/calorie_tracker/bmi"> Want to know your BMI? &nbsp;<button className='bmi-btn' >Click Me</button></Link></marquee>
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
          <b>What is health? </b>

          The World health organisation (WHO) defines health as "a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity." To put it into simple words, into our regular perspective of the word "health" , it is a situation of not falling ill or not letting our body go through any kind of problems now, and in the near future.
          <br />
          {/* <b>Food Intake:</b> */}
          {/* in order to reduce your weight and remove unwanted calories, you are supposed to
          follow a
          regulated and healthy food intake. this will allow you to be fit and fine. */}
        </p>
        <br />
        <p><b>Exercise:</b> along with food, you need to follow few regular exercises which will allow you to be fit
          and gives
          mental relaxation. Calories are calculated using these exercises. try to increase the time spent on each
          exercise
          for every day.</p>
        <br />
        <p><b>What is a Calorie?</b></p>
        <p>
          The amount of energy in an item of food or drink is measured in calories.

          When we eat and drink more calories than we use up, our bodies store the excess as body fat. If this continues, over time we may put on weight.

          As a guide, an average man needs around 2,500kcal (10,500kJ) a day to maintain a healthy body weight.

          For an average woman, that figure is around 2,000kcal (8,400kJ) a day.

          These values can vary depending on age, size and levels of physical activity, among other factors.</p>
      </div>
    </div>
  )
}
