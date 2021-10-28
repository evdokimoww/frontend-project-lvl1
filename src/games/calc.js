import { generateRandomNum, generateRandomOperation } from '../supportFunctions';

export const brainCalcRules = () => 'What is the result of the expression?';

const brainCalcRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();
  const operation = generateRandomOperation();

  const answer = `Question: ${firstOperand} ${operation} ${secondOperand}\nYour answer: `;
  let rightAnswer = 0;

  switch (operation) {
    case '+':
      rightAnswer = firstOperand + secondOperand;
      break;
    case '-':
      rightAnswer = firstOperand - secondOperand;
      break;
    case '*':
      rightAnswer = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return [answer, rightAnswer];
};

export default brainCalcRound;
