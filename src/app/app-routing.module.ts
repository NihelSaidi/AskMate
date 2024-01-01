import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import{QuestionComponent}from './components/question/question.component';
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
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
