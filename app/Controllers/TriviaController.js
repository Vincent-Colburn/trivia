import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

function _drawTrivia() {
    let template = ''
    ProxyState.trivias.forEach(t => console.log(t))
    console.log(ProxyState.trivias)
    document.getElementById('app').innerHTML = template + ''
    console.log("hi")
}

export default class TriviaController {
    constructor() {
        //NOTE registering the subscribers
        ProxyState.on('trivias', _drawTrivia)
        //NOTE Fetching the data
        triviaService.getTrivia('');
    }
    choice(userAnswer) {
        console.log(userAnswer)

    }
    start() {
        _drawTrivia()
    }
}