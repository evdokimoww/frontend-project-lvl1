#!/usr/bin/env node
import game from '../src/index.js';
import brainGcdRound, { brainGcdRules } from '../src/games/gcd.js';

game(brainGcdRules(), brainGcdRound);
