import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/Services/question-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any;
  id: any;
  user: any = {};
  questions:any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserServiceService, 
    private questionService: QuestionServiceService) { }

  ngOnInit() {
    // display

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.userService.getUser(this.id).subscribe(
      (data) => {
        console.log(data.user);
        this.user = data.user
      }
    )
    this.questionService.getQuestions().subscribe(
      (data)=>{
        console.log(data.questions);
        this.questions=data.questions;
      }
    )
  }
}
