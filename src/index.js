import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';
import startDebate from './debate-start-component.js';
import scoreCandidates from './score-plus-minus-component.js';
import sortCandidatesByDebateScore from './candidates-sort-component.js';

loadCandidates(candidates);
startDebate();
scoreCandidates(candidates);


const endDebateButtonNode = document.getElementById('end-debate');

endDebateButtonNode.addEventListener('click', () => {
    const sortedCandidates = sortCandidatesByDebateScore(candidates);
    loadCandidates(sortedCandidates);
    console.log(candidates);
});