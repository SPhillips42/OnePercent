import { Component, OnInit } from '@angular/core';
import {EducationServiceService} from '../education-service.service';
import {EducationClass} from '../education-class';
import {Route, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  students: EducationClass[];

  constructor(
    private edusvc: EducationServiceService,) {}

  ngOnInit() {
        this.edusvc.list()
          .subscribe(respond => {
            console.log(respond);
            this.students = respond;
          });
    }
  }