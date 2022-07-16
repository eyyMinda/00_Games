const wordList = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"];
const lives = document.getElementById('lives');
const wrong = document.getElementById('wrong');
const answer = document.getElementById('answer');
const tries = document.getElementById('tries');

let randomWord = wordList[Math.floor(Math.random() * wordList.length)]
let word = randomWord.split('');
let count = 0;
let guessed = [];
let left = 6;

listWord();
updateLives(left);

function updateLives(left) {
    lives.innerText = '';
    for (i = 0; i <= left; i++) { lives.innerHTML += `<i class="fas fa-heart text-danger p-1">` }
    lives.innerHTML += `<br>
    <button class="btn border m-3" onclick='anotherOne()'>Try Another One</button>`;
}
function listWord() {
    for (i = 0; i < word.length; i++) { guessed[i] = '_'; }
    answer.innerText = guessed.join(' ');
}
function anotherOne() { window.location.reload(); }

const controller = new AbortController();
addEventListener(('keyup'), (e) => {

    if (e.code.includes('Key')) {
        let correct = 0;;
        let key = e.key.toLowerCase();
        for (i = 0; i < word.length; i++) {
            if (word[i] == key) {
                if (guessed[i] != key) {
                    guessed[i] = key;
                    count++;
                } else {
                    console.log('Guessing same key');
                }
                correct = 1;
            }
        }
        //Lose 1 life
        if (correct == 0) {
            if (!tries.innerText.includes(key)) {
                left--;
                tries.innerText += key + ' ';
            }
        }
        //Check how many letters guessed
        if (correct == 1) { wrong.innerText = 'You have guessed ' + count + ' letters...'; }
        updateLives(left);
        answer.innerText = guessed.join(' ');
        //Lost
        if (left < 0) {
            console.log('noob');
            wrong.innerText = `noob the answer was '${randomWord}'`;
            lives.innerHTML = `<i class="fa-solid fa-skull m-4"> You lost</i><br>
            <button class="btn border" onclick='anotherOne()'>Try Another One</button>`;
            controller.abort();
        }
        //Won
        if (word.join('') === guessed.join('')) {
            console.log('pro');
            lives.innerHTML = `<i class="fa-solid fa-champagne-glasses m-4"> You Won</i><br>
            <button class="btn border" onclick='anotherOne()'>Try Another One</button>`;
            controller.abort();
        }
    }
}, { signal: controller.signal })