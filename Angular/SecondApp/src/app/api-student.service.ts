import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  ApiUrl = 'https://630c6b3883986f74a7bfd234.mockapi.io/student';
  
  constructor(private __http:HttpClient) { }

  getAllStudents(){
    return this.__http.get(this.ApiUrl);
  }

  getStudentById(id:any){
     return this.__http.get(this.ApiUrl+'/'+id);
  }
  delete(id:any){
    return this.__http.delete(this.ApiUrl+'/'+id);
  }
  inserStudent(form:any){
    return this.__http.post(this.ApiUrl,form);
  }
  updateStudent(id:any,form:any){
    return this.__http.put(this.ApiUrl+'/'+id,form);
  }
}
