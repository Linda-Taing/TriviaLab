



export class Question {


    constructor(data) {

        this.difficulty = data.difficulty
        this.category = data.category
        this.questions = data.question
        this.type = data.type
        this.incorrect_answers = data.incorrect_answers
        this.correct_answer = data.correct_answer
    }


    get questionsCard() {
        return  /*html*/`
        <div class="">
            <div class="col-md-6  ">

              <div class="  card border border-4 border-dark my-3">
                 <p class="dif ms-2 mb-0">Level: ${this.difficulty}</p>
                 <p class="ms-2 type">${this.type} choice</p>
                    <h4 class="text-center">Q:     ${this.questions}<h2>
                     </div>            
                    
                 <div class="card selectable text-center border-2 border-dark border answer">
                <p class="pt-2">Choices: ${this.incorrect_answers},${this.correct_answer} <p>
            </div>
        </div>
    </div>
        `
    }
}