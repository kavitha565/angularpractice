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


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UmbracoComponent,
    PowerbiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerDashboardModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
