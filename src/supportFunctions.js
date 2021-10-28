export const generateRandomNum = () => Math.floor(Math.random() * 100);

export const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};
