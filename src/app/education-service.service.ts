import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EducationClass} from './education-class';

const url = "http://localhost:56405/api";

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {
  list(): Observable<EducationClass[]>{
    return this.http.get(`${url}/students`) as Observable<any>;
  }
  get(id: string): Observable<EducationClass>{
    return this.http.get(`${url}/students/${id}`) as Observable<any>;
  }
  create(student: EducationClass): Observable<any>
  {return this.http.post(`${url}/students/`, student) as Observable<any>};
  change(student: EducationClass): Observable<any>
  {return this.http.put(`${url}/students/${student.id}`, student) as Observable<any>};
  remove(student: EducationClass): Observable<any>
  {return this.http.delete(`${url}/students/${student.id}`) as Observable<any>};


  constructor(private http: HttpClient) { }
}