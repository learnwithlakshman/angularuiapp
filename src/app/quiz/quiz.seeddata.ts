import { Question } from './../shared/model/question.model';


export class QuizData {


    getQuestionWithOutAnswers(){
        let questions:Question[] = [];
        for(let q of this.questions){
            questions.push({"qid":q.qid,"qdata":q.qdata,"options":q.options,"ans":0});
        }
        return questions;
    }
    getAnswerKeys(){
        let keyMap:Map<number,number>=new Map(); 
        for(let q of this.questions){
            keyMap[q.qid] = q.ans;
        }
        return keyMap;
    }
    questions: Question[] = [
        {
            "qid": 1,
            "qdata": "Who is the fifth President of India?",
            "options": ["Zakhir", "Rajendra Prasad", "Fakhrudin Ali Ahmed", "Kalam"],
            "ans": 3
        },

        {
            "qid": 2,
            "qdata": "What is the capital of Delhi?",
            "options": ["Delhi", "Mumbai", "Nagpur", "Patna"],
            "ans": 1
        },

        {
            "qid": 3,
            "qdata": "ALU stands for?",
            "options": ["Arithmetic Logic Unit", "Appliction Logic Unit", "Array Logic Unit", "None above"],
            "ans": 1
        }
    ]
}