import candidates from '../data/candidates.js';
import makeCandidateList from './candidate-list-component.js';

const candidateListNode = document.getElementById('candidates-list');

candidates.forEach(candidate => {
    const candidateLi = makeCandidateList(candidate);
    candidateListNode.appendChild(candidateLi);
})