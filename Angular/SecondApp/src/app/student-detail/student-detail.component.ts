import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  id = 0;
  data:Student = new Student();
  constructor(private __actRoute:ActivatedRoute, private __api:ApiStudentService, private __router:Router){

  }
  ngOnInit(){
    this.id = this.__actRoute.snapshot.params['id'];
    this.__api.getStudentById(this.id).subscribe((res:any)=>{
      this.data = res;
    });
  }
  delete(){
    this.__api.delete(this.id).subscribe((res)=>{
      this.__router.navigate(['/students']);
    });
  }
}
