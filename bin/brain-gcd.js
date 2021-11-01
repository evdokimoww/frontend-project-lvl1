#!/usr/bin/env node
import game from '../src/index.js';
import brainGcdRound, { brainGcdRules } from '../src/games/gcd.js';

const gameFunction = () => {
  const rules = brainGcdRules();
  const round = brainGcdRound;
  return { rules, round };
};

game(gameFunction);
