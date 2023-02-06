import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsServices.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




function _drawQuestions() {
    console.log('Drawing Questions?')
    let template = ''
    appState.questions.forEach(q => template += q.questionsCard)
    setHTML('questions', template)

}

export class QuestionsController {
    constructor() {
        this.getQuestions()
        appState.on('questions', _drawQuestions)
    }
    async getQuestions() {
        try {
            // console.log("controller queston");
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }

}