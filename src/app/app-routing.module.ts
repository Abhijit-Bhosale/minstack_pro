import { CreaterequestComponent } from './createrequest/createrequest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistationpageComponent } from './registationpage/registationpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: RegistationpageComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'createrequest', component: CreaterequestComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }


