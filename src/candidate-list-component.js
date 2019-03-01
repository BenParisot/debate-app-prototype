export default function makeCandidateList(candidate) {
    const html = `
    <li>
                <button id="minus-one"> - </button>
                <section id="candidate-detail">
                    <img src="${candidate.image}">
                    <h2>${candidate.lastName}</h2>
                </section>
                <button id="plus-one"> + </button>
            </li>`;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}