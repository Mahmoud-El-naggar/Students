import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [
  ]
})
export class AddStudentComponent {
  name = "";
  email = "";
  address = "";
  phone = "";
  classNo = "";
  gpa = "";
  age = "";
  addedSuccessfully = false;
  constructor(private service: StudentService) { }
  addStudent() {
    if (this.name && this.email && this.address && this.phone && this.classNo && this.gpa && this.age) {

      let student = {
        "name": this.name, "email": this.email, "address": this.address, "phone": this.phone,
        "classNo": this.classNo, "gpa": this.gpa, "age": this.age
      }
      this.service.addStudent(student).subscribe({
        next: () => {
          this.addedSuccessfully = true;
          setTimeout(() => { this.addedSuccessfully = false }, 1200)
          this.name = "";
          this.email = "";
          this.address = "";
          this.phone = "";
          this.classNo = "";
          this.gpa = "";
          this.age = "";
        }
      })
    }
  }
}
