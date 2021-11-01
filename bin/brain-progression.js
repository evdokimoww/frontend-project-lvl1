#!/usr/bin/env node
import game from '../src/index.js';
import brainProgressionRound, { brainProgressionRules } from '../src/games/progression.js';

const gameFunction = () => {
  const rules = brainProgressionRules();
  const round = brainProgressionRound;
  return { rules, round };
};

game(gameFunction);
