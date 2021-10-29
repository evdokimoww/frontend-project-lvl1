import { generateRandomNum } from '../supportFunctions.js';

const primeCheck = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrimeRound = () => {
  const num = generateRandomNum(1, 1000);

  const result = primeCheck(num);

  const answer = `Question: ${num}\nYour answer: `;

  return [answer, result ? 'yes' : 'no'];
};

export default brainPrimeRound;
