import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input("data") message :string //@Input decorator makes a class property as input property bound to DOM(data bound property)
  @Input("data1") message1: string
  childMessage: string = "child data"
  constructor() { }

   //Every angular component goes throught below lifecycle hooks
   ngOnChanges(){
    console.log("ngOnChanges() - This is the first method called when ever any data bound component/directive property changes");
  }
  ngOnInit(){
    console.log("ngOnInit() - Angular calls this method to intialize the component/directive");
  }
  ngDoCheck(){
    console.log("ngDoCheck() - This method is called in every change detection run,it detects changes and act accordingly which can't be detected by angular ")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() - Angular calls this method after component/directive content is intialized")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() - This method is called after angular checked the content intialization")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit() - Angular calls this method after component and its child views are intialized");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() - This method is called after angular checkes view intialization")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy() - This method is called before a component/directive is destroyed ex- Unsubscribe observables,dettach event handles etc")
  }

}
