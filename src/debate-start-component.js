import candidates from '../data/candidates.js';

export default function startDebate() {
    const startDebateButtonNode = document.getElementById('start-debate');
    
    startDebateButtonNode.addEventListener('click', () => {
        candidates.forEach(candidate => {
            candidate.debateScore = 0;
        });
        console.log(candidates);
    });
}