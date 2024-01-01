import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { GptComponent } from './gpt/gpt.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserProfilComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    QuestionComponent,
    GptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
