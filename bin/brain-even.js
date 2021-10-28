#!/usr/bin/env node
import game from '../src/index.js';
import brainEvenRound, { brainEvenRules } from '../src/games/even.js';

game(brainEvenRules(), brainEvenRound);
