import { NgModule } from '@angular/core';
import { EducationListComponent } from '../education-list/education-list.component';
import { EducationEditComponent } from '../education-edit/education-edit.component';
import { EducationDetailComponent } from '../education-detail/education-detail.component';
import { EducationCreateComponent } from '../education-create/education-create.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'students/list', component: EducationListComponent},
  {path: 'students/create', component: EducationCreateComponent},
  {path: 'students/edit/:id', component: EducationEditComponent},
  {path: 'students/detail/:id', component: EducationDetailComponent},
  {path: '**', component: EducationListComponent},
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class EducationModuleModule { }
