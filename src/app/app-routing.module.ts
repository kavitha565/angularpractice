import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UmbracoComponent } from './umbraco/umbraco.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { OneComponent } from './components/one/one.component';
import { EmployesComponent } from './employes/employes.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {
    path : 'forms',
    component : FormsComponent
  },
  {
    path : 'employes',
    component : EmployesComponent
  },
  {
    path : 'parent',
    component : OneComponent
  },
  {
    path:'about',
    component: AboutComponent,
    canDeactivate:[AuthGuardService]
  },
  {
    path:'home',
    component: HomeComponent,
    children : [  //used to define child routes or nested routes
      {path: 'umbraco',component:UmbracoComponent},
      {path: 'powerbi',component:PowerbiComponent}
    ],
    canActivateChild : [AuthGuardService]
  },
  {path:'contact',component: ContactComponent,canActivate: [AuthGuardService]},
  { 
    path: 'order-list',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    canLoad : [AuthGuardService] 
  },
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
