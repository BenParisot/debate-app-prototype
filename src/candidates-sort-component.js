export default function sortCandidatesByDebateScore(candidates) {
    return candidates.sort((a, b) => {
        if(a.debateScore === b.debateScore) {
            return 0;
        }
        if(a.debateScore > b.debateScore) {
            return -1;
        }
        return 1;
    });
}