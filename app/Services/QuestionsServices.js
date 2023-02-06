import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { trivia_api } from "./AxiosService.js";

class QuestionsService {
    async getQuestions() {
        const res = await trivia_api.get('api.php?amount=2')
        console.log('are you there?', res.data);
        const questionsIWant = res.data.results.filter
            (q => q.question).map(q => new Question(q))
        console.log({ questionsIWant })
        appState.questions = questionsIWant

    }
}
export const questionsService = new QuestionsService()
