import readlineSync from 'readline-sync';

const game = (gameFunction) => {
  const { rules, generateRound } = gameFunction();
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(rules);

  const roundCounter = 3;
  for (let i = 0; i < roundCounter; i += 1) {
    const [question, rightAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer !== rightAnswer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export default game;
