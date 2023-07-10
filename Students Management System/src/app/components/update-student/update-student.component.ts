import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [
  ]
})
export class UpdateStudentComponent {

  ID: number;
  student: any;
  updatedSuccessfully = false;
  constructor(private service: StudentService, route: ActivatedRoute) {
    this.ID = route.snapshot.params["id"];
  }
  ngOnInit(): void {
    if (this.ID) {
      this.service.getStudent(this.ID).subscribe(
        {
          next: (data) => {
            this.student = data;
          },
          error: (error) => {
            console.log(error)
          }
        }
      );
    }
  }
  Update(name: any, email: any, address: any, phone: any, classNo: any, gpa: any, age: any) {
    if (name && email && address && phone && classNo && gpa && age) {
      let student = { name, email, address, phone, classNo, gpa, age }
      this.service.updateStudent(this.ID, student).subscribe({
        next: () => {
          this.updatedSuccessfully = true;
          setTimeout(() => { this.updatedSuccessfully = false }, 1200)
          this.student.name = "";
          this.student.email = "";
          this.student.address = "";
          this.student.phone = "";
          this.student.classNo = "";
          this.student.gpa = "";
          this.student.age = "";
        }
      });

    }
  }
}
