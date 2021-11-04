import generateRandomNum from '../supportFunction.js';

const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const executeOperation = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const gameRules = 'What is the result of the expression?';

const brainCalcRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();
  const operation = generateRandomOperation();

  const answer = `${firstOperand} ${operation} ${secondOperand}`;
  const rightAnswer = executeOperation(firstOperand, secondOperand, operation);

  return [answer, rightAnswer.toString()];
};

const gameFunction = () => {
  const rules = gameRules;
  const generateRound = brainCalcRound;
  return { rules, generateRound };
};

export default gameFunction;
