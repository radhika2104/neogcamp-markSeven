var translateBtn = document.querySelector('#btn-translate');
var textinput = document.querySelector('textarea');
var outputarea = document.querySelector('#output');

// Use Mock API for testing otherwise rate limit issue
// var serviceURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

var serviceURL = 'https://api.funtranslations.com/translate/navi.json';

var colors = {
    errorColor: '#fecdd3',
    white :'#FFFFFF'
}

function constructURL(textinput){
    return serviceURL + '?text=' + textinput };

function errorHandler(error){
    console.log('Error: ',error)
    if (error instanceof TypeError)
    {
        outputarea.innerText = 'Error Alert! It seems the people of Navi are busy fishing. Try again in an hour!'
    } else {
        outputarea.innerText = error
    }
    
    outputarea.style.backgroundColor = colors.errorColor;
};


function dofetch(textinput){
    fetch(constructURL(textinput))
    .then(response => response.json())
    .then(data => {var translatedText = data.contents.translated
        outputarea.innerText = translatedText})
    .catch(errorHandler)
};

function clickHandler() {
    // Put styling back to default in case error occured in last call
    outputarea.style.backgroundColor = colors.white;
    outputarea.innerText = '';
    var translationText = textinput.value;
    dofetch(translationText);
};

translateBtn.addEventListener("click", clickHandler)
