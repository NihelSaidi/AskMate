import { Component } from '@angular/core';
import { QuestionServiceService } from 'src/app/Services/question-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  users: any;
  id: any;
  user: any;
  questions: any;
  question: any = {};
  connectedUser: any;
  creationSuccess = false;
  constructor(private questionService: QuestionServiceService, private userService: UserServiceService,private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    // display

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");
    // this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log(this.id);
    // When fetching user data
    this.userService.getUser(this.connectedUser.result.id).subscribe({
      next: (result) => {
        this.user = result.result; // Make sure `data.result` contains the user data
      },
      error: (error) => console.error('There was an error!', error)
    });

  }
  addQuestion() {

    this.questionService.addQuestion(this.question).subscribe(
      (data) => {
        console.log(data);
        this.creationSuccess = true;
        // Afficher un message de succès ou rediriger vers une autre page
      },
      (error) => {
        console.log("Error in creating the question", error);
        // Afficher un message d'erreur
      }
    );
  }
}
