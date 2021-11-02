const generateRandomNum = (min = 0, max = 100) => {
  const x = Math.ceil(min);
  const y = Math.floor(max);
  return Math.floor(Math.random() * (x - y + 1)) + y;
};

export default generateRandomNum;
