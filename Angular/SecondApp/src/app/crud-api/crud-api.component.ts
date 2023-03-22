import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-crud-api',
  templateUrl: './crud-api.component.html',
  styleUrls: ['./crud-api.component.css']
})
export class CrudApiComponent {
    myForm = new FormGroup({
      name : new FormControl('',Validators.required),
      age : new FormControl('',Validators.required)
    })
    faculties : Faculty [] = []; 
    

    idToEdit = -1;

    insert(){
      if(this.idToEdit<0){
        this.faculties.push(<Faculty>this.myForm.value);
      }
      else{
        this.faculties[this.idToEdit] = <Faculty>this.myForm.value;
      }
      this.myForm.controls.name.setValue('');
      this.myForm.controls.age.setValue('');
      this.idToEdit = -1;
    }
    delete(i:any){
      this.faculties.splice(i,1);
    }
    edit(i:any)
    {
      this.idToEdit = i;
      this.myForm.controls.name.setValue(this.faculties[i].name);
      this.myForm.controls.age.setValue(this.faculties[i].age);
    }
}
