import React, { useState } from 'react';
import 


const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  const handleHeightChange = event => {
    setHeight(event.target.value);
  }

  const handleWeightChange = event => {
    setWeight(event.target.value);
  }

  const handleCalculateBMI = () => {
    const bmi = calculateBMI(height, weight);
    setBMI(bmi);
  }

  return (
    <div>
      <label htmlFor="height">Enter your height (in cm):</label>
      <input type="number" id="height" name="height" value={height} onChange={handleHeightChange} />
      <br />
      <label htmlFor="weight">Enter your weight (in kg):</label>
      <input type="number" id="weight" name="weight" value={weight} onChange={handleWeightChange} />
      <br />
      <button onClick={handleCalculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
}

export default App;
