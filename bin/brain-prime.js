#!/usr/bin/env node
import game from '../src/index.js';
import brainPrimeRound, { brainPrimeRules } from '../src/games/prime.js';

const gameFunction = () => {
  const rules = brainPrimeRules();
  const round = brainPrimeRound;
  return { rules, round };
};

game(gameFunction);
