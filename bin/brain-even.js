#!/usr/bin/env node
import game from '../src/index.js';
import brainEvenRound, { brainEvenRules } from '../src/games/even.js';

const gameFunction = () => {
  const rules = brainEvenRules();
  const round = brainEvenRound;
  return { rules, round };
};

game(gameFunction);
