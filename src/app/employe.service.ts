import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  constructor(private http:HttpClient){ //instead of intantiating HttpClient injectable class once again just add it as construtor param such that angular injects the dependency 

  }
  getEmployes(){
    //make a http request to get data from server
    return this.http.get('http://demo0674380.mockable.io/getEmployes')
  }
}
