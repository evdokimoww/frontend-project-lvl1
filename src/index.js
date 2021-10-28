import readlineSync from 'readline-sync';

export const generateRandomNum = () => Math.floor(Math.random() * 100);

export const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const game = (rules, round) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = round();
    const answer = readlineSync.question(question);

    if (+answer === +rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default game;
