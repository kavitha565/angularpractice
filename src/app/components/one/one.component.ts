import { Component, OnInit, ViewChild } from '@angular/core';
import { TwoComponent } from '../two/two.component'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  @ViewChild(TwoComponent,{static:false}) child  //if static set to true child component view will be intialized earlier at and will be avaliabe at ngOnInit stage by default value is false(ngAfterViewInit)
  message:Array<number> = [1,2,3]
  username: string = "kavitha pasupuleti"
  constructor() { }

  getMessage(value){
    alert(value)
  }
  ngOnInit() {
    //console.log("child data using view child "+this.child.confidential)
  }
  ngAfterViewInit(){
    console.log("child data using view child "+this.child.confidential)
  }

}
