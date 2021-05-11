const sayThis = "";
const getAPI = {
    en: `http://api.voicerss.org/?key=a514c3c4a4bc4bca8ab0305b3d8f60b4&hl=en-us&src=${sayThis}`,
    pl: `http://api.voicerss.org/?key=a514c3c4a4bc4bca8ab0305b3d8f60b4&hl=pl-pl&v=Jan&src=${sayThis}`
}
const domElement = {
    audio: document.getElementById('audio'),
    button: document.getElementById('button')
}

//Language selector
function languageSelector() {
    //Set this flag to different language
    //for different language
    let languageFlag = 'pl';
    if (languageFlag === 'pl') {
        domElement.audio.src = getAPI.pl;
    } else if (languageFlag === 'en') {
        domElement.audio.src = getAPI.en;
    } else {
        domElement.audio.src = getAPI.en;
    }
}

//Play audio file
function play() {
    domElement.audio.play();
}

//On Load
setTimeout(
    function() {
        languageSelector();
        domElement.button.addEventListener('click', play);
    }, 1000
);