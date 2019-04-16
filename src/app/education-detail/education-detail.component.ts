import { Component, OnInit } from '@angular/core';
import {EducationServiceService} from '../education-service.service';
import {EducationClass} from '../education-class';
import {Route, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  student: EducationClass;
  
delete(): void{
this.edusvc.remove(this.student)
.subscribe(
  respond => {
    console.log("Student Delete Successful!", respond)
    this.router.navigateByUrl(`/students/list`);
  },
  err => {
    console.log("Student Delete Failed!", err)
  }
);
}

edit(): void{
this.edusvc.change(this.student)
.subscribe(
  respond => { //success
    console.log(respond);
    this.router.navigateByUrl(`/students/edit/${this.student.id}`);
  },
  err =>{ //error
    console.error(err);
  }
);
}

  constructor(
    private edusvc: EducationServiceService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.edusvc.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.student = respond;
        });
  }
}



