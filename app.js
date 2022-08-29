var translateBtn = document.querySelector('#btn-translate');
var textinput = document.querySelector('textarea');
var outputarea = document.querySelector('#output');

// Use Mock API for testing otherwise rate limit issue
// var serviceURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

var serviceURL = 'https://api.funtranslations.com/translate/navi.json';

function constructURL(textinput){
    return serviceURL + '?text=' + textinput };

function errorHandler(error){
    console.log('Error: ',error)
};


function dofetch(textinput){
    fetch(constructURL(textinput))
    .then(response => response.json())
    .then(data => {var translatedText = data.contents.translated
        outputarea.innerText = translatedText})
    .catch(errorHandler)
};

function clickHandler() {
    var translationText = textinput.value;
    dofetch(translationText);
};

translateBtn.addEventListener("click", clickHandler)
