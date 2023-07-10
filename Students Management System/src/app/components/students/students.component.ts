import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  students: any;
  studentToDelete: any;
  constructor(private service: StudentService) {

  }
  ngOnInit(): void {
    this.service.getAllStudents().subscribe(
      {
        next: (data) => { this.students = data; },
        error: (error) => { }
      }
    )
  }
  
  deleteStudent(student: any) {
    this.service.deleteStudent(student).subscribe({
      next: () => {
        this.ngOnInit()
      },
      error: () => { }
    })
  }
  confirmStudent(student: any) {
    this.studentToDelete = student;
  }

}
