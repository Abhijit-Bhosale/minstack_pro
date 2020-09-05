import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistationpageComponent } from './registationpage/registationpage.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreaterequestComponent } from './createrequest/createrequest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CityComponent,
    LoginpageComponent,
    RegistationpageComponent,
    ServicesComponent,
    DashboardComponent,
    CreaterequestComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
