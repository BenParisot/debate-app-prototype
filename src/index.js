import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';

loadCandidates(candidates);
console.log(candidates);

const startDebateButtonNode = document.getElementById('start-debate');

startDebateButtonNode.addEventListener('click', () => {
    candidates.forEach(candidate => {
        candidate.debateScore = 0;
    });
    console.log(candidates);
});
