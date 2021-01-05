import { ProxyState } from "../Appstate.js";
import Trivia from "../Models/Trivia.js";
import { opentdb } from "./AxiosService.js"

class TriviaService {
    async getTrivia(url) {
        let res = await opentdb.get(url)
        ProxyState.trivias = res.data.results.map(t => new Trivia(t))
        console.log(ProxyState.trivias)
    }
}

export const triviaService = new TriviaService();