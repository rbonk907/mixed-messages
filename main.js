
//create an array of words for the first part of the sentence
let words1 = ['greatness', 'success', 'excellency', 'misery', 'bliss'];
let verbs = ['grind', 'work', 'slack-off', 'perform', 'keep at it'];
let bodyParts = ['head', 'chest', 'arms', 'feet', 'elbows', 'hands', 'knees'];

// select a random word from the words and verbs array
let word = words1[Math.floor(Math.random() * words1.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let body = bodyParts[Math.floor(Math.random() * bodyParts.length)];

// output a random sentence
console.log(`We can achieve ${word} so long as we put our ${body} down and ${verb}!`);
