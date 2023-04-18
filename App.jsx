import React, { useState } from 'react';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleHeightChange = event => {
    setHeight(event.target.value);
    setError('');
    setMessage('');
  }

  const handleWeightChange = event => {
    setWeight(event.target.value);
    setError('');
    setMessage('');
  }

  const handleCalculateBMI = () => {
    if (height <= 0 || weight <= 0) {
      setError('Please enter valid values for height and weight.');
      setBMI('');
      return;
    }

    const bmi = calculateBMI(height, weight);
    setBMI(bmi);

    if (bmi < 18.5) {
      setMessage('You are underweight.');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage('You have a healthy weight.');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are obese.');
    }
  }

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ fontWeight: 'bold' }}>{message}</p>}
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
}

export default App;