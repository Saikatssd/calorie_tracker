import './App.css';
import './components/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Food from './components/Food';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Exercise from './components/Exercise';
import Blog from './components/Blog';
import Challenge from './components/Challenge';
import Bmi from './components/Bmi';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/calorie_tracker" element={<Home />} />
          <Route exact path="/calorie_tracker/bmi" element={<Bmi />} />
          <Route exact path="/calorie_tracker/food" element={<Food />} />
          <Route exact path="/calorie_tracker/exercise" element={<Exercise />} />
          <Route exact path="/calorie_tracker/blog" element={<Blog />} />
          <Route exact path="/calorie_tracker/challenges" element={<Challenge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;