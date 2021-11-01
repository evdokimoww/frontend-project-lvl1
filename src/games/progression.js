import generateRandomNum from '../supportFunctions.js';

export const brainProgressionRules = () => 'What number is missing in the progression?';

const generateNumberProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + (step * i));
  }

  return progression;
};

const brainProgressionRound = () => {
  const startProgression = generateRandomNum();
  const stepProgression = generateRandomNum(1, 9);

  const progression = generateNumberProgression(startProgression, stepProgression);

  const rightAnswer = progression.splice(generateRandomNum(0, 9), 1, '..');
  const answer = `${progression.join(' ')}`;
  return [answer, rightAnswer.toString()];
};

export default brainProgressionRound;
