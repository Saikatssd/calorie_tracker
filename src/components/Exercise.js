// import React from 'react'

// export default function Exercise() {
//   return (
//     <div className='container'>

//       <h1><b>
//         <center> Calories Burned for various Activities</center>
//       </b> </h1>
//       <hr />
//       <center>
//         <form>
//           <p><label for="weight">body weight (kgs):</label><input type="text" id="bodyWeight" value="" /> </p>
//           <fieldset>
//             <legend>add activity</legend>
//             <label for="desc">description (optional):</label><input type="text" />
//             <label for="minutes">minutes:</label><input type="text" id="minutes" value="" />
//             <label for="mets">intensity (<acronym title="Metabolic Equivalent of Task">MET</acronym>):</label>
//             <input type="text" id="mets" value="" />
//             <br /> <br />
//             <button type="submit" onclick="return calculateCaloriesBurned()" return false>Enter</button>

//             <input type="text" id="caloriesBurned" value="" readonly /> Calories burned per hour.
//           </fieldset>
//         </form>

//         <div id="examples">
//           <table>
//             {/* <caption>Example <acronym title="Metabolic Equivalent of Task">MET</acronym> values for different
//               activities (<a href="http://en.wikipedia.org/wiki/Metabolic_equivalent"
//                 target="_blank"><cite>wikipedia</cite></a>)</caption> */}
//                   <caption>Example <acronym title="Metabolic Equivalent of Task">MET</acronym> values for different
//               activities (<a href="http://en.wikipedia.org/wiki/Metabolic_equivalent"
//                ><cite>wikipedia</cite></a>)</caption>
//             <thead>
//               <tr>
//                 <th>Physical Activity</th>
//                 <th><acronym title="Metabolic Equivalent of Task">MET</acronym></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th>Light Intensity Activities</th>
//                 <th>&lt; 3</th>
//               </tr>
//               <tr>
//                 <td>sleeping</td>
//                 <td>0.9</td>
//               </tr>
//               <tr>
//                 <td>watching television</td>
//                 <td>1.0</td>
//               </tr>
//               <tr>
//                 <td>writing, desk work, typing</td>
//                 <td>1.8</td>
//               </tr>
//               <tr>
//                 <td>walking, less than 2.0 mph, level ground, very slow</td>
//                 <td>2.0</td>
//               </tr>
//             </tbody>
//             <tbody>
//               <tr>
//                 <th>Moderate Intensity Activities</th>
//                 <th>3 to 6</th>
//               </tr>
//               <tr>
//                 <td>bicycling, stationary, 50 watts, very light effort</td>
//                 <td>3.0</td>
//               </tr>
//               <tr>
//                 <td>calisthenics, home exercise, light or moderate effort</td>
//                 <td>3.5</td>
//               </tr>
//               <tr>
//                 <td>bicycling, &lt;10 mph, leisure, to work or for pleasure</td>
//                 <td>4.0</td>
//               </tr>
//               <tr>
//                 <td>bicycling, stationary, 100 watts, light effort</td>
//                 <td>5.5</td>
//               </tr>
//             </tbody>
//             <tbody>
//               <tr>
//                 <th>Vigorous Intensity Activities</th>
//                 <th>&gt; 6</th>
//               </tr>
//               <tr>
//                 <td>jogging, general</td>
//                 <td>7.0</td>
//               </tr>
//               <tr>
//                 <td>pushups, situps, pullups</td>
//                 <td>8.0</td>
//               </tr>
//               <tr>
//                 <td>calisthenics, jumping jacks, vigorous effort</td>
//                 <td>8.0</td>
//               </tr>
//               <tr>
//                 <td>running jogging, in place</td>
//                 <td>8.0</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <p class="info">For a more comprehensive guide,
//         {/* style="font-weight: bold" */}
//           {/* <a  href="http://prevention.sph.sc.edu/tools/docs/documents_compendium.pdf"
//             target="_blank">download</a> the latest */}
//               <a  href="http://prevention.sph.sc.edu/tools/docs/documents_compendium.pdf"
//            >download</a> the latest
//           <acronym>PDF</acronym> compendium of <acronym title="Metabolic Equivalent of Task">MET</acronym> values for
//           various
//           activities.
//         </p>
//         {/* style="font-weight: bold"  */}
//         {/* <a href="https://www.youtube.com/user/FitnessBlender" target="_blank">Watch Workout
//           Videos</a> workout videos */}
//            <a href="https://www.youtube.com/user/FitnessBlender" >Watch Workout
//           Videos</a> workout videos
//       </center>
//     </div>
//   )
// }


import React from 'react'

export default function Exercise() {
  return (
    <div className='container'>
      <h3 className='exercise-heading'>Select Your Category</h3>
      <div className="exercise-container">
        <div className="exercise-box">
          <a href="https://www.verywellfamily.com/easy-exercises-for-kids-1257391" target="_blank"> <img className='exercise-image' src="/images/children_exercise.jpg" alt="Childen Exercise" />
            <p>Children Age(6-17yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.utrecsports.org/public/upload/files/general/SP20_FW_PT_AtHome_Workouts_Strength.pdf" target="_blank">
            <img className='exercise-image' src="/images/adult_exercise.jpg" alt="" />
            <p>Adult Age(18-50yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.seniorlifestyle.com/resources/blog/7-best-exercises-for-seniors-and-a-few-to-avoid/" target="_blank">
          <img className='exercise-image'  src="/images/old_exercise.jpg" alt="" />
            <p>Old Age(60+ yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.whattoexpect.com/pregnancy/exercises-for-pregnant-women" target="_blank">
          <img className='exercise-image' src="/images/woman_exercise.webp" alt="" />
          <p>Pregnant Woman</p></a>
        </div>
      </div>
    </div>
  )
}
