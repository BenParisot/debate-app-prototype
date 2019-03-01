import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';
import startDebate from './debate-start-component.js';

loadCandidates(candidates);
console.log(candidates);
startDebate();

candidates.forEach(candidate => {
    const candidatePlusOneButtonNode = document.getElementById(`${candidate.id}-plus-one`);
    const candidateMinusOneButtonNode = document.getElementById(`${candidate.id}-minus-one`);

    candidatePlusOneButtonNode.addEventListener('click', () => {
        candidate.debateScore++;
        console.log(candidate);
    });

    candidateMinusOneButtonNode.addEventListener('click', () => {
        candidate.debateScore--;
        console.log(candidate);
    });
    
});
