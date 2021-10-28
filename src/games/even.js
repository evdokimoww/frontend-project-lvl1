import { generateRandomNum } from '../index.js';

export const brainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenRound = () => {
  const randomNum = generateRandomNum();
  const answer = `Question: ${randomNum}\nYour answer: `;
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

  return [answer, rightAnswer];
};

export default brainEvenRound;
