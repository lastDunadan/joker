const domElement = {
    audio: document.getElementById('audio'),
    button: document.getElementById('button')
}
let sayThis = "";
let getSpeak = {
    en: ``,
    pl: ``
}

//Get jokes form API
async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        sayThis = data.joke;
    } catch (error) {
        console.error('problem with getJokes()', error);
    }
}

//Language selector
function languageSelector() {
    //Set this flag to different language
    //for different language
    let languageFlag = 'en';
    if (languageFlag === 'pl') {
        domElement.audio.src = getSpeak.pl;
    } else if (languageFlag === 'en') {
        domElement.audio.src = getSpeak.en;
    } else {
        domElement.audio.src = getSpeak.en;
    }
}

//Play audio file
function play() {
    console.log(sayThis);
    domElement.audio.play();
}

//On Load
domElement.button.addEventListener('click', play);
setTimeout(
    function() {
        getJokes();
    }, 1000
);
setTimeout(
    function() {
        getSpeak = {
            en: `http://api.voicerss.org/?key=a514c3c4a4bc4bca8ab0305b3d8f60b4&hl=en-us&src="${sayThis}"`,
            pl: `http://api.voicerss.org/?key=a514c3c4a4bc4bca8ab0305b3d8f60b4&hl=pl-pl&v=Jan&src="${sayThis}"`
        }
        languageSelector();
    }, 1500
);