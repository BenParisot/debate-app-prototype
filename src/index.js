import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';
import startDebate from './debate-start-component.js';

loadCandidates(candidates);
console.log(candidates);
startDebate();

candidates.forEach(candidate => {
    const candidatePlusOneButtonNode = document.getElementById(`${candidate.id}-plus-one`);

    candidatePlusOneButtonNode.addEventListener('click', () => {
        candidate.debateScore++;
        console.log(candidate);
    });
    
});
