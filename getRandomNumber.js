
  const generatesRandomNumber = (start, end) => {
    let result = start + Math.random() * end;
    return Math.round(result);
  }
  console.log(generatesRandomNumber(100, 200));
  console.log(generatesRandomNumber(0, 100));
  console.log(generatesRandomNumber(50, 120));