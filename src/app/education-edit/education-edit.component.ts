import { Component, OnInit } from '@angular/core';
import {EducationServiceService} from '../education-service.service';
import {EducationClass} from '../education-class';
import {Route, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  
  student: EducationClass;

  save():void{
    this.edusvc.change(this.student)
    .subscribe(
      respond => { //success
        console.log("User Update Successful!: ", respond);
        this.router.navigateByUrl('/students/list');
      },
      err =>{ //error
        console.error("User Update Error: ", err);
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
