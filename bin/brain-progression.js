#!/usr/bin/env node
import game from '../src/index.js';
import brainProgressionRound, { brainGcdRules } from '../src/games/progression.js';

game(brainGcdRules(), brainProgressionRound);
