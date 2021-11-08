import generateRandomNum from '../supportFunction.js';

const gameRules = 'What number is missing in the progression?';

const generateNumberProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }

  return progression;
};

const generateRound = () => {
  const startProgression = generateRandomNum();
  const stepProgression = generateRandomNum(1, 9);
  const lengthProgression = generateRandomNum(5, 10);
  const progression = generateNumberProgression(
    startProgression, stepProgression, lengthProgression,
  );

  const rightAnswer = progression.splice(generateRandomNum(0, lengthProgression - 1), 1, '..');
  const answer = `${progression.join(' ')}`;
  return [answer, rightAnswer.toString()];
};

const gameFunction = () => {
  const rules = gameRules;
  return { rules, generateRound };
};

export default gameFunction;
