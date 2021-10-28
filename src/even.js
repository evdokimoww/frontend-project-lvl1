import readlineSync from 'readline-sync';

const brainEven = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, Bill!');
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default brainEven;
