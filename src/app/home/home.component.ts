import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

function  log(target,name,descriptor){
  console.log(target,name,descriptor)
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test:string = "kavitha"
  foods:Array<string> = ["one","two","three"]
  constructor() { }

  addFood(newFood){
    //this.foods.push(newFood)
    this.foods = [...this.foods,newFood]
  }

  @log
  saySomething(...arr: Array<number>){
    console.log("Hi this is a decorted fun",+arr[0])
  }

  //Create an observable using Observable constructor func which takes subscription fun as parameter
  streamData = new Observable((observer)=>{
    observer.next(1); // This method send the data to subscriber
    observer.next(2);
    observer.next(3);
    observer.complete(); // This method indicates completion of execution
  })

  streamData1 = of(1,2,3);  // of method returns an observable instance 
  
  ngOnInit() {
    this.saySomething(1,2,3);

    // this.streamData.subscribe({ //subscriber method takes observer obj with handler methods as argument
    //   next(num){ console.log(num)},
    //   complete(){console.log("Observable is completed")},
    //   error(){console.log("Error occured in observable")}
    // })
  }

}
