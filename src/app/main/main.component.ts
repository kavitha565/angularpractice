import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  username:string=""
  data:Array<string> = ["apple","orange","mango","mango"]
  items: Object = {keyOne: "value 1", keyTwo: "value 2", keyThree: "value 3"}
  imagePath="test"
  constructor() { }


  clickme(){
    alert("user clicked me!!")
  }
  ngOnInit() {
    let hero = new Hero(123,"kavitha")
    console.log(hero);
  }

}
