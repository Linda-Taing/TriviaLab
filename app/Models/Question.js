



export class Question {


    constructor(data) {

        this.difficulty = data.difficulty
        this.category = data.category
        this.questions = data.questions

    }


    get questionsCard() {
        return  /*html*/`
        <div class="col-md-4">
        <div class="card">
        <h2>${this.questions}<h2>
        </div>
        </div>
        `
    }
}