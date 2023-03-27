import React, { useState } from 'react'
import '../components/bmi.css'

export default function Bmi() {

    // state
    const [age, setAge] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [bmi, setBmi] = useState('00.00')
    const [message, setMessage] = useState('')

    let calcBmi = (event) => {
                //prevent submitting
                event.preventDefault()
        
                if (weight === '' || height === '' || age === '') {
                    alert('All fields are required!')
                } else {
                    let bmi = (weight / (height / 100 * height / 100)                    )
                    setBmi(bmi.toFixed(1))
        
                    // Logic for message
        

                    if (bmi < 18.5) {
                         setMessage('Underweight')
                    } else if (18.5 <= bmi && bmi <= 24.9) {
                         setMessage('Healthy')
                    } else if (25 <= bmi && bmi <= 29.9) {
                         setMessage('Overweight')
                    } else if (30 <= bmi && bmi <= 34.9) {
                         setMessage('Obese')
                    } else if (35 <= bmi) {
                         setMessage('Extremely obese')
                    }
                }
            }


    return (
        <div className='container' >
            <div className="box">
                <h1>BMI Calculator</h1>
                <div className="content">

                    <form action="" onSubmit={calcBmi}>
                        <div className="input">
                            <label for="height">Age</label>
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="text-input" id="age" autocomplete="off" required />
                        </div>

                        <div className="gender">

                            <label className="container">
                                <input type="radio" name="radio" id="m" />
                                <p className="text">Male</p>
                                <span className="checkmark"></span>
                            </label>


                            <label className="container">
                                <input type="radio" name="radio" id="f" />
                                <p className="text">Female</p>
                                <span className="checkmark"></span>
                            </label>

                        </div>

                        <div className="containerHW">
                            <div className="inputH">
                                <label for="height">Height(cm)</label>
                                <input value={height} onChange={(event) => setHeight(event.target.value)} type="number" id="height" required />
                            </div>

                            <div className="inputW">
                                <label for="weight">Weight(kg)</label>
                                <input value={weight} onChange={(event) => setWeight(event.target.value)} type="number" id="weight" required />
                            </div>
                        </div>

                        <button className="calculate" id="submit" onclick="calculate();">Calculate BMI</button>
                    </form>

                </div>
                <div className="result">
                    <p>Your BMI is</p>
                    <div id="result">{bmi}</div>
                    <p className="comment">{message}</p>
                </div>
            </div>

        </div >

    )
}


// import React, { useState } from 'react'
// import '../components/bmi.css'

// export default function Bmi() {

//     // state
//     const [weight, setWeight] = useState(0)
//     const [height, setHeight] = useState(0)
//     const [bmi, setBmi] = useState('')
//     const [message, setMessage] = useState('')



//     let calcBmi = (event) => {
//         //prevent submitting
//         event.preventDefault()

//         if (weight === 0 || height === 0) {
//             alert('Please enter a valid weight and height')
//         } else {
//             let bmi = (weight / (height * height) * 703)
//             setBmi(bmi.toFixed(1))

//             // Logic for message

//             if (bmi < 25) {
//                 setMessage('You are underweight')
//             } else if (bmi >= 25 && bmi < 30) {
//                 setMessage('You are a healthy weight')
//             } else {
//                 setMessage('You are overweight')
//             }
//         }
//     }

//     //  show image based on bmi calculation
//     let imgSrc;

//     if (bmi < 1) {
//         imgSrc = null
//     } else {
//         if (bmi < 25) {
//             imgSrc = require('./images/underweight.png')
//         } else if (bmi >= 25 && bmi < 30) {
//             imgSrc = require('./images/healthy.png')
//         } else {
//             imgSrc = require('./images/overweight.png')
//         }
//     }


//     let reload = () => {
//         window.location.reload()
//     }

//     return (
//         <div className='container' >
//             <h2 className='center'>BMI Calculator</h2>
//             <form onSubmit={calcBmi}>
//                 <div>
//                     <label>Weight (lbs)</label>
//                     <input value={weight} onChange={(e) => setWeight(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Height (in)</label>
//                     <input value={height} onChange={(event) => setHeight(event.target.value)} />
//                 </div>
//                 <div>
//                     <button className='btn' type='submit'>Submit</button>
//                     <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
//                 </div>
//             </form>

//             <div className='center'>
//                 <h3>Your BMI is: {bmi}</h3>
//                 <p>{message}</p>
//             </div>

//             <div className='img-container'>
//                 <img src={imgSrc} alt=''></img>
//             </div>
//         </div>

//     )
// }

