import generateRandomNum from '../supportFunction.js';

export const brainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEvenRound = () => {
  const randomNum = generateRandomNum();
  const answer = `${randomNum}`;
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [answer, rightAnswer];
};

const gameFunction = () => {
  const rules = brainEvenRules();
  const generateRound = brainEvenRound;
  return { rules, generateRound };
};

export default gameFunction;
