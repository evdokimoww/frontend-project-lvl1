import readlineSync from 'readline-sync';

const game = (makeGameData) => {
  const { rules, generateRound } = makeGameData();
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

  const result = console.log(`Congratulations, ${name}!`);
  return result;
};

export default game;
