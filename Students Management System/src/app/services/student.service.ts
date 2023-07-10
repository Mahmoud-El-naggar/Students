import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BaseUrl = "http://localhost:3000/students";
  constructor(private myClient: HttpClient) { }

  getAllStudents() {
    return this.myClient.get(this.BaseUrl)
  }
  getStudent(Id: any) {
    return this.myClient.get(`${this.BaseUrl}/${Id}`)
  }
  addStudent(Student: any) {
    return this.myClient.post(this.BaseUrl, Student)
  }
  updateStudent(id:any,Student: any) {
    return this.myClient.patch(`${this.BaseUrl}/${id}`, Student)
  }
  deleteStudent(Student: any) {
    return this.myClient.delete(`${this.BaseUrl}/${Student.id}`)
  }
}

/*
7d95c778-16f9-44d6-9413-007f60193f41	bf3592c8-213c-40ac-9162-2cf29ce12998	1
8ae196ff-918c-4719-98db-0585a54e4d09	bf3592c8-213c-40ac-9162-2cf29ce12998	2
c67e092f-1c07-4cfd-a2c7-0ab40c39c322	bf3592c8-213c-40ac-9162-2cf29ce12998	1
eda0b9fb-dd21-42cd-a385-0ce9d2636c85	bf3592c8-213c-40ac-9162-2cf29ce12998	1
*/