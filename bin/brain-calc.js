#!/usr/bin/env node
import game from '../src/index.js';
import brainCalcRound, { brainCalcRules } from '../src/games/calc.js';

game(brainCalcRules(), brainCalcRound);
