import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';
import startDebate from './debate-start-component.js';
import scoreCandidates from './score-plus-minus-component.js';

loadCandidates(candidates);
console.log(candidates);
startDebate();
scoreCandidates(candidates);


