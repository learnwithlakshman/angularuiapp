import { QuizData } from './quiz/quiz.seeddata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CbookComponent } from './cbook/cbook.component';
import { QuizComponent } from './quiz/quiz.component';
import { CaseconvertorDirective } from './caseconvertor.directive';
import {QuestionComponent} from './home/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CbookComponent,
    QuizComponent,
    CaseconvertorDirective,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuizData],
  bootstrap: [AppComponent]
})
export class AppModule { }
