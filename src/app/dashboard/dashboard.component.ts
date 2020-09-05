import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;
  requestList: object;
  constructor(private router: Router, private http: HttpClient, public authService: AuthService) {


  }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('userInfo'))[0].UNAME;
    const data = JSON.parse(localStorage.getItem('userInfo'))[0];
    const url = "http://localhost:3000/getrequest";
    this.http.post(url, data).subscribe({
      next: data => {
        console.log(data);
        if (typeof data !== 'undefined' && data.toString().length > 0) {
          console.log("Record fetched");
          this.requestList = data;
          console.log(this.requestList);
          //this.router.navigate([this.returnUrl]);
        }
        else {
          alert("There was an error!");
        }
      },
      error: error => console.error('There was an error!', error)
    })

  }

  getrequest

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}