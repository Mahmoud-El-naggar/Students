import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
   { path: "", component: StudentsComponent},
   { path: "students/:id", component: StudentDetailsComponent},
   { path: "add", component: AddStudentComponent},
   { path: "update/:id", component: UpdateStudentComponent},
   { path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
