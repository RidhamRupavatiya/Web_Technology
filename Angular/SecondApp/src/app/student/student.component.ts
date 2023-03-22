import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  data : Student [] = [];
  constructor(private __api:ApiStudentService){ }

  ngOnInit(){
    this.__api.getAllStudents().subscribe((res:any)=>{
      this.data = res;
    });
  }
  delete(id:any){
    this.__api.delete(id).subscribe((res)=>{
      this.ngOnInit();
    });
}
}
