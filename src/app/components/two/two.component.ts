import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  @Input() data: Array<number>
  @Output() dataChange = new EventEmitter<Array<number>>();
  @Input() username : string
  password:string = "kavi@1996"
  @Output() passwordEvent = new EventEmitter<string>();
  confidential:string = "238489748972398472934"
  user: string;

  subjectData = new Subject();
  constructor(private sharedService:SharedService) { }

  sendMessage(){
    this.passwordEvent.emit(this.password)
    this.dataChange.emit([1,2,3,4,5])
  }
  ngOnInit() {

    this.subjectData.next(1);
    this.subjectData.next(2);
    this.subjectData.subscribe(res=>console.log("subject value is"+res))
    
    this.subjectData.next(8);
    // this.sharedService.getUser
    //   .subscribe((res)=>{
    //     this.user = res
    //   })
  }

}
