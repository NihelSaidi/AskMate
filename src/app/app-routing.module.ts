import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import{QuestionComponent}from './components/question/question.component';
import { GptComponent } from './gpt/gpt.component';
const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'dashboard',component: DashboardComponent
  },
  ,{path:'question',component:QuestionComponent},

  {path:'profil',component:UserProfilComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'gpt', component:GptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
