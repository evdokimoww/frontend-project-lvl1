import { generateRandomNum } from '../supportFunctions.js';

export const brainGcdRules = () => 'What number is missing in the progression?';

const brainProgressionRound = () => {
  const progression = [];
  const startProgression = generateRandomNum();
  const stepProgression = generateRandomNum(1, 9);

  for (let i = 0; i < 10; i += 1) {
    progression.push(startProgression + (stepProgression * i));
  }

  const rightAnswer = progression.splice(generateRandomNum(0, 9), 1, '..');
  const answer = `Question: ${progression.join(' ')}\nYour answer: `;
  return [answer, rightAnswer.toString()];
};

export default brainProgressionRound;
