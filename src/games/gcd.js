import generateRandomNum from '../supportFunctions.js';

export const brainGcdRules = () => 'Find the greatest common divisor of given numbers.';

const checkGcd = (firstOperand, secondOperand) => {
  let a = firstOperand;
  let b = secondOperand;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return (firstOperand + secondOperand).toString();
};

const brainGcdRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();

  const answer = `${firstOperand} ${secondOperand}`;
  const rightAnswer = checkGcd(firstOperand, secondOperand);

  return [answer, rightAnswer];
};

export default brainGcdRound;
