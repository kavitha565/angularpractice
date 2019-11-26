import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-umbraco',
  templateUrl: './umbraco.component.html',
  styleUrls: ['./umbraco.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UmbracoComponent implements OnInit {
  @Input() data:Array<string>
  constructor(private cd:ChangeDetectorRef) { }

  detach(){
    this.cd.detach()
  }
  reattach(){
    this.cd.reattach()
  }
  ngOnInit() {
  }

}
