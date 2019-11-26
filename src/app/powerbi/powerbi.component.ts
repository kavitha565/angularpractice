import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.scss']
})
export class PowerbiComponent implements OnInit {
  time:Observable<number>
  constructor() { }

  ngOnInit() {
    // this.time = new Observable((observer)=>{
    //   setInterval(()=>{
    //     observer.next(Math.random())
    //   },1000)
    // })

    // this.time.subscribe((res)=>{
    //   console.log(res)
    // })
  }

}
