const test = QUnit.test;

const candidate = {
    firstName: 'Jay',
    lastName: 'Inslee',
    imageURL: './assets/candidates-inslee.jpg',
    debateScore: 0,
    debateWins: 0
};

function makeCandidateList(candidate) {
    const html = `
    <li>
                <button id="minus-one"> - </button>
                <section id="candidate-detail">
                    <img src="./assets/candidates-booker.jpg">
                    <h2>Booker</h2>
                </section>
                <button id="plus-one"> + </button>
            </li>`;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


test('create html list of candidates using template and interpolation', assert => {

    const expected = `
    <li>
                <button id="minus-one"> - </button>
                <section id="candidate-detail">
                    <img src="./assets/candidates-booker.jpg">
                    <h2>Booker</h2>
                </section>
                <button id="plus-one"> + </button>
            </li>`;

    const result = makeCandidateList(candidate);

    assert.htmlEqual(result, expected);
});