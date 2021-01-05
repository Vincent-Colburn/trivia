export default class Trivia {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answer }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.answer = correct_answer
        this.wrong_answer = incorrect_answer

    }


    get Template() {
        return `
       <p>Category: ${this.category} </p><br> 
       <p>Question: ${this.question} </p>
        <button type="button" class="btn-success" onclick="app.TriviaController.choice(true)">True</button>
        <button type="button" class="btn-danger" onclick="app.TriviaController.choice(false)"> False</button>
    `
    }
}