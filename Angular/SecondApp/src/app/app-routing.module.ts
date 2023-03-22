import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CrudApiComponent } from './crud-api/crud-api.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"arraycrud",component:CrudApiComponent},
  {path:"students",component:StudentComponent},
  {path:"student/add",component:AddStudentComponent},
  {path:"student/edit/:id",component:AddStudentComponent},
  {path:"student/:id",component:StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
