import React from 'react'
import '../components/bmi.css'

export default function Bmi() {
    
  return (
    <div className='container' >
    <div className="box">
        <h1>BMI Calculator</h1>
        <div className="content">


            <div className="input">
                <label for="height">Age</label>
                <input type="text" className="text-input" id="age" autocomplete="off" required />
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
                    <input type="number" id="height" required />
                </div>

                <div className="inputW">
                    <label for="weight">Weight(kg)</label>
                    <input type="number" id="weight" required /> 
                </div>
            </div>

            <button className="calculate" id="submit" onclick="calculate();">Calculate BMI</button>
        </div>
        <div className="result">
            <p>Your BMI is</p>
            <div id="result">00.00</div>
            <p className="comment"></p>
        </div>
    </div>

    {/* <!-- The Modal --> */}
    <div id="myModal" className="modal">
        {/* <!-- Modal content --> */}
        <div class="modal-content">
            <span className="close">&times;</span>
            <p id="modalText"></p>
        </div>
    </div>
</div>

  )
}
