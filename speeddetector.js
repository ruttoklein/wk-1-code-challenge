function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if (speed <= speedLimit) {// calculateDemeritPoints
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
      if (demeritPoints >= 12) {
        return "License suspended";
      } else {
        return "demeritPoints";
      }
    }
  }
  const result = calculateDemeritPoints(Speed);
console.log(speed);
  