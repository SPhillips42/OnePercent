import { Component, OnInit } from '@angular/core';
import {EducationServiceService} from '../education-service.service';
import {EducationClass} from '../education-class';
import {Route, ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-education-create',
  templateUrl: './education-create.component.html',
  styleUrls: ['./education-create.component.css']
})
export class EducationCreateComponent implements OnInit {
  student: EducationClass = new EducationClass(0,0,'','',true)
 
  save(): void{
    this.edusvc.create(this.student)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/sudents/list')
    },
    err => {
      console.log("User Update Error", err);
    }
  );
}
  constructor(
    private edusvc: EducationServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
