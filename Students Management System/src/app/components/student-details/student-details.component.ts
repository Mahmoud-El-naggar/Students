import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {
  ID = 0;
  student: any;
  constructor(route: ActivatedRoute, private service: StudentService) {
    this.ID = route.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.service.getStudent(this.ID).subscribe(
      {
        next: (data) => { this.student = data },
        error: (error) => { console.log(error) }
      }
    );
  }
}
