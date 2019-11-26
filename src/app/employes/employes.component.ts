import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {

  employes: Array<object> = []
  constructor(private es:EmployeService) { }

  ngOnInit() {
    this.es.getEmployes()
      .subscribe((res:Array<object>)=>{
        this.employes = res
      },err=>{
        console.log("error")
      })
  }

}
