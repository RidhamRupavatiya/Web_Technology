import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private __api:ApiStudentService,private __router:Router,private __actRou:ActivatedRoute){

  }

    id = -1
  myForm = new FormGroup({
    createdAt : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    avatar : new FormControl('',Validators.required),
    department : new FormControl('',Validators.required),
    roll_no : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    username : new FormControl('',Validators.required),
    id : new FormControl('',Validators.required)
  });


  ngOnInit(){
    if(this.__actRou.snapshot.params['id']!=null){
      this.id = this.__actRou.snapshot.params['id'];
      this.__api.getStudentById(this.id).subscribe((res:any)=>{
        this.myForm.controls.avatar.setValue(res.avatar);
        this.myForm.controls.city.setValue(res.city);
        this.myForm.controls.createdAt.setValue(res.createdAt);
        this.myForm.controls.department.setValue(res.department);
        this.myForm.controls.id.setValue(res.id);
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.password.setValue(res.password);
        this.myForm.controls.username.setValue(res.username);
        this.myForm.controls.roll_no.setValue(res.roll_no);
      })
    }
  }

  insert(){
    if(this.id>0){
      this.__api.updateStudent(this.id,this.myForm.value).subscribe((res)=>{
        this.__router.navigate(['/students']);
      });
    }
    else{
      this.__api.inserStudent(this.myForm.value).subscribe((res)=>{
        this.__router.navigate(['/students']);
      });
    }
  }
}
