import { generateRandomNum } from '../supportFunctions.js';

export const brainGcdRules = () => 'Find the greatest common divisor of given numbers.';

const brainGcdRound = () => {
  let firstOperand = generateRandomNum();
  let secondOperand = generateRandomNum();

  const answer = `Question: ${firstOperand} ${secondOperand}\nYour answer: `;

  while (firstOperand !== 0 && secondOperand !== 0) {
    if (firstOperand > secondOperand) {
      firstOperand %= secondOperand;
    } else {
      secondOperand %= firstOperand;
    }
  }

  return [answer, (firstOperand + secondOperand)];
};

export default brainGcdRound;
