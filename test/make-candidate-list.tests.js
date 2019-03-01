import { makeCandidateList } from '../src/candidate-list-component.js';
const test = QUnit.test;

const candidate = {
    firstName: 'Cory',
    lastName: 'Booker',
    image: './assets/candidates-booker.jpg',
    debateScore: 0,
    debateWins: 0
};

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