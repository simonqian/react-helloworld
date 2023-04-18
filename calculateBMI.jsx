const calculateBMI = (height, weight) => {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    return bmi.toFixed(2);
  }