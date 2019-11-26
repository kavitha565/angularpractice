import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UmbracoComponent } from './umbraco/umbraco.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { HighlightDirective } from './directives/highlight.directive';
import { EmployesComponent } from './employes/employes.component';
import { HttpClientModule } from '@angular/common/http';
import { NodupPipe } from './nodup.pipe';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UmbracoComponent,
    PowerbiComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HighlightDirective,
    EmployesComponent,
    NodupPipe,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerDashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
