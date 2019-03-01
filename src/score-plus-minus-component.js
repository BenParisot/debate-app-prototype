export default function scoreCandidates(candidates) {
    console.log('resest works?');
    candidates.forEach(candidate => {
        const candidatePlusOneButtonNode = document.getElementById(`${candidate.id}-plus-one`);
        const candidateMinusOneButtonNode = document.getElementById(`${candidate.id}-minus-one`);
    
        candidatePlusOneButtonNode.addEventListener('click', () => {
            candidate.debateScore++;
            console.log(candidate);
        });
    
        candidateMinusOneButtonNode.addEventListener('click', () => {
            candidate.debateScore--;
        });
    
    });
}
