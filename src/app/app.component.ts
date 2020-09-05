import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userName: string;
  isLoggedinUser: boolean;
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('userInfo'))[0].UNAME;
    this.isLoggedIn();
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  public isLoggedIn(): void {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      this.isLoggedinUser = true;
    }
    else {
      this.isLoggedinUser = false;
    }
  }

}



