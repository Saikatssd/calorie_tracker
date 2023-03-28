import React from 'react'

export default function Exercise() {
  return (
    <div className='container'>
      <h3 className='exercise-heading'>Select Your Category</h3>
      <div className="exercise-container">
        <div className="exercise-box">
          <a href="https://www.verywellfamily.com/easy-exercises-for-kids-1257391" target="_blank"> 
          <img className='exercise-image' src="https://static.vecteezy.com/system/resources/previews/005/151/801/non_2x/cartoon-little-kids-exercising-in-the-park-free-vector.jpg" alt="Childen Exercise" />
            <p>Children Age(6-14yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.utrecsports.org/public/upload/files/general/SP20_FW_PT_AtHome_Workouts_Strength.pdf" target="_blank">
            <img className='exercise-image' src="https://previews.123rf.com/images/microone/microone1807/microone180700072/104219923-gym-exercises-body-pump-workout-vector-set-with-cartoon-sport-man-characters-fitness-people.jpg" alt="" />
            <p>Adult Age(15-45yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.seniorlifestyle.com/resources/blog/7-best-exercises-for-seniors-and-a-few-to-avoid/" target="_blank">
            <img className='exercise-image' src="https://www.caregiversolutions.ca/wp-content/uploads/Some-thoughts-on-walkers.jpg" alt="Old People Exercise" />
            <p>Old Age(45+ yrs)</p></a>
        </div>
        <div className="exercise-box">
          <a href="https://www.whattoexpect.com/pregnancy/exercises-for-pregnant-women" target="_blank">
            <img className='exercise-image' src="https://media.istockphoto.com/id/524541196/vector/meditating-on-maternity-pregnant-woman-meditating-while-sitting-yoga-position.jpg?s=612x612&w=0&k=20&c=46E7RdDIXf7b3k5YSnYWJPxEISwCaAI-3UwhaF8P-4Y=" alt="" />
            <p>Pregnant Woman</p></a>
        </div>
      </div>
    </div>
  )
}
