let kanjis = [
    { kanji: 'ア', meaning: 'A' },
    { kanji: 'イ', meaning: 'I' },
    { kanji: 'ウ', meaning: 'U' },
    { kanji: 'エ', meaning: 'E' },
    { kanji: 'オ', meaning: 'O' },
    { kanji: 'カ', meaning: 'Ka' },
    { kanji: 'キ', meaning: 'Ki' },
    { kanji: 'ク', meaning: 'Ku' },
    { kanji: 'ケ', meaning: 'Ke' },
    { kanji: 'コ', meaning: 'Ko' },
    { kanji: 'サ', meaning: 'Sa' },
    { kanji: 'シ', meaning: 'Shi' },
    { kanji: 'ス', meaning: 'Su' },
    { kanji: 'セ', meaning: 'Se' },
    { kanji: 'ソ', meaning: 'So' },
    { kanji: 'タ', meaning: 'Ta' },
    { kanji: 'チ', meaning: 'Chi' },
    { kanji: 'ツ', meaning: 'Tsu' },
    { kanji: 'テ', meaning: 'Te' },
    { kanji: 'ト', meaning: 'To' },
    { kanji: 'ナ', meaning: 'Na' },
    { kanji: 'ニ', meaning: 'Ni' },
    { kanji: 'ヌ', meaning: 'Nu' },
    { kanji: 'ネ', meaning: 'Ne' },
    { kanji: 'ノ', meaning: 'No' },
    { kanji: 'ハ', meaning: 'Ha' },
    { kanji: 'ヒ', meaning: 'Hi' },
    { kanji: 'フ', meaning: 'Fu' },
    { kanji: 'ヘ', meaning: 'He' },
    { kanji: 'ホ', meaning: 'Ho' },
    { kanji: 'マ', meaning: 'Ma' },
    { kanji: 'ミ', meaning: 'Mi' },
    { kanji: 'ム', meaning: 'Mu' },
    { kanji: 'メ', meaning: 'Me' },
    { kanji: 'モ', meaning: 'Mo' },
    { kanji: 'ヤ', meaning: 'Ya' },
    { kanji: 'ユ', meaning: 'Yu' },
    { kanji: 'ヨ', meaning: 'Yo' },
    { kanji: 'ラ', meaning: 'Ra' },
    { kanji: 'リ', meaning: 'Ri' },
    { kanji: 'ル', meaning: 'Ru' },
    { kanji: 'レ', meaning: 'Re' },
    { kanji: 'ロ', meaning: 'Ro' },
    { kanji: 'ワ', meaning: 'Wa' },
    { kanji: 'ヲ', meaning: 'Wo' },
    { kanji: 'ン', meaning: 'N' },
]; 

let currentKanjiIndex = 0;

function displayKanji() {
    const kanjiDisplay = document.getElementById("kanjiDisplay");
    kanjiDisplay.innerText = kanjis[currentKanjiIndex].kanji;
}

function shuffleOptions() {
    const shuffledOptions = [...kanjis];
    const correctOption = shuffledOptions.splice(currentKanjiIndex, 1)[0];
    shuffledOptions.sort(() => Math.random() - 0.5);
    shuffledOptions.length = 3;
    const randomPosition = Math.floor(Math.random() * 4);
    shuffledOptions.splice(randomPosition, 0, correctOption);
    return shuffledOptions;
}

function displayOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
   
    const shuffledOptions = shuffleOptions();  

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.meaning;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(option) {
    const kanjiList = document.getElementById("kanjiList");
    const kanjiItem = kanjiList.children[currentKanjiIndex];
    const isCorrect = option.meaning === kanjis[currentKanjiIndex].meaning;

    if (isCorrect) {
        kanjiItem.classList.add("active");
    } else {
        kanjiItem.classList.add("wrong");
    }

    currentKanjiIndex = (currentKanjiIndex + 1) % kanjis.length;
    displayKanji();
    displayOptions(); 
}

function createKanjiList() {
    const kanjiList = document.getElementById("kanjiList");
    kanjis.forEach((kanji, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = kanji.kanji;
        listItem.addEventListener("click", () => {
            currentKanjiIndex = index;
            displayKanji();
            displayOptions();
        });
        kanjiList.appendChild(listItem);
    });
}
createKanjiList();
displayKanji();
displayOptions();
