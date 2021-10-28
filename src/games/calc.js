import { generateRandomNum, generateRandomOperation } from '../index.js';

export const brainCalcRules = () => 'What is the result of the expression?';

const brainCalcRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();
  const operation = generateRandomOperation();

  const answer = `Question: ${firstOperand} ${operation} ${secondOperand}\nYour answer: `;
  let rightAnswer = 0;

  if (operation === '+') rightAnswer = firstOperand + secondOperand;
  if (operation === '-') rightAnswer = firstOperand - secondOperand;
  if (operation === '*') rightAnswer = firstOperand * secondOperand;

  return [answer, rightAnswer];
};

export default brainCalcRound;
