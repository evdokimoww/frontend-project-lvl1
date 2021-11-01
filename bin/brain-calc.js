#!/usr/bin/env node
import game from '../src/index.js';
import brainCalcRound, { brainCalcRules } from '../src/games/calc.js';

const gameFunction = () => {
  const rules = brainCalcRules();
  const round = brainCalcRound;
  return { rules, round };
};

game(gameFunction);
