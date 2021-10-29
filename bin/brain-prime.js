#!/usr/bin/env node
import game from '../src/index.js';
import brainPrimeRound, { brainPrimeRules } from '../src/games/prime.js';

game(brainPrimeRules(), brainPrimeRound);
