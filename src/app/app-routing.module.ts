import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { QuestionComponent } from './components/question/question.component';
import { GptComponent } from './gpt/gpt.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
        
      },
      { path: 'chatbot', component: GptComponent },
      { path: 'profil', component: UserProfilComponent },
      {
        path: '', // Default route within the dashboard
        redirectTo: 'question',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
