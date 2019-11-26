import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  user: string;

  constructor(private sharedService:SharedService) { }

  updateUser(newuser){
    this.sharedService.setUser(newuser)
  }
  ngOnInit() {
    this.sharedService.getUser
      .subscribe((res)=>{
        this.user = res
      })
  }

}
