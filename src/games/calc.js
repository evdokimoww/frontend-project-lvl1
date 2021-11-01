import generateRandomNum from '../supportFunctions.js';

const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const executeOperation = (a, b, operation) => {
  let result = 0;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }

  return result;
};

export const brainCalcRules = () => 'What is the result of the expression?';

const brainCalcRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();
  const operation = generateRandomOperation();

  const answer = `${firstOperand} ${operation} ${secondOperand}`;
  const rightAnswer = executeOperation(firstOperand, secondOperand, operation);

  return [answer, rightAnswer.toString()];
};

export default brainCalcRound;
