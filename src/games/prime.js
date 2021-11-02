import generateRandomNum from '../supportFunction.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrimeRound = () => {
  const num = generateRandomNum(1, 1000);
  const result = isPrime(num);

  const answer = `${num}`;
  const rightAnswer = result ? 'yes' : 'no';

  return [answer, rightAnswer];
};

const gameFunction = () => {
  const rules = brainPrimeRules();
  const generateRound = brainPrimeRound;
  return { rules, generateRound };
};

export default gameFunction;
