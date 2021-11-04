import generateRandomNum from '../supportFunction.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const checkGcd = (firstOperand, secondOperand) => {
  let a = firstOperand;
  let b = secondOperand;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a.toString();
};

export const brainGcdRound = () => {
  const firstOperand = generateRandomNum();
  const secondOperand = generateRandomNum();

  const answer = `${firstOperand} ${secondOperand}`;
  const rightAnswer = checkGcd(firstOperand, secondOperand);

  return [answer, rightAnswer];
};

const gameFunction = () => {
  const rules = gameRules;
  const generateRound = brainGcdRound;
  return { rules, generateRound };
};

export default gameFunction;
