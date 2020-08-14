import { Question } from './../shared/model/question.model';
import { QuizData } from './quiz.seeddata';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions:Question[]=[];
  answerKey:Map<number,number>;

  result:any;
  status:any;
  isSubmitted;

  constructor(private dataService:QuizData) { }

  ngOnInit(): void {
      this.questions = this.dataService.getQuestionWithOutAnswers();
      this.answerKey = this.dataService.getAnswerKeys();
    
  }

  onSubmit(f){
    this.isSubmitted = true;
    let ccount =0;
    for(let q of this.questions){
        let ans = this.answerKey[q.qid];
        if(ans==q.ans){
          ccount++;
        }
    } 
    let score;
    score = (ccount/this.questions.length) * 100;
    this.status = score >= 40;
     if(ccount > 0){
        let i = 1;
        let s = setInterval(()=>{
          if(i >= score -1){
            clearInterval(s);
          }
          i = i + 1;
          this.result = i;
        },100)
    }
    else
     this.result = 0;
    f.reset();
    window.scroll(0,0);
    setTimeout(()=>{
        this.isSubmitted = false;
    },12000)
 
   }
  
}
