import { Component, ViewChild } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildComponent,{static:true}) child 
  title:string = 'okta';
  username:string
  childData:string
  profileForm = this.fb.group({
    firstname : ['',Validators.required],
    lastname : ['',Validators.required]
  })
  constructor(private fb:FormBuilder){
  }
  onSubmit(){
    alert("submitted!!")
  }
  onReactiveSubmit(){
    alert("firstname is "+this.profileForm.controls.firstname.value);
  }
  ngOnInit(){
    this.childData = this.child.childMessage
  }
  // ngOnInit(){
  //   this.childData = this.child.childMessage
  // }
  //Every angular component goes throught below lifecycle hooks
  // ngOnChanges(){
  //   console.log("ngOnChanges() - This is the first method called when ever any data bound component/directive property changes");
  // }
  // ngOnInit(){
  //   console.log("ngOnInit() - Angular calls this method to intialize the component/directive");
  // }
  // ngDoCheck(){
  //   console.log("ngDoCheck() - This method is called in every change detection run,it detects changes and act accordingly which can't be detected by angular ")
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit() - Angular calls this method after component/directive content is intialized")
  // }
  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked() - This method is called after angular checked the content intialization")
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit() - Angular calls this method after component and its child views are intialized");
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked() - This method is called after angular checkes view intialization")
  // }
  // ngOnDestroy(){
  //   console.log("ngOnDestroy() - This method is called before a component/directive is destroyed ex- Unsubscribe observables,dettach event handles etc")
  // }
}
