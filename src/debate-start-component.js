import candidates from '../data/candidates.js';
import loadCandidates from './candidate-list-component.js';

export default function startDebate() {
    const startDebateButtonNode = document.getElementById('start-debate');    
    startDebateButtonNode.addEventListener('click', () => {
        candidates.forEach(candidate => {
            candidate.debateScore = 0;
        });
        loadCandidates(candidates);
        console.log(candidates);
    });
}