import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CbookComponent } from './cbook/cbook.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [

    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
    {
      path:"cbook",
      component:CbookComponent
    },
    {
      path:'quiz',
      component: QuizComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
