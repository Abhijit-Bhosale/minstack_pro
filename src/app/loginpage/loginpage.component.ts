import { Component, OnInit } from '@angular/core';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  faFileInvoice = faFileInvoice;

  myfbGroup = this.fb.group({

    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[a-zA-z]*')]],
    confpassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[a-zA-z0-9]*')]],
  });

  returnUrl: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = '/dashboard';
  }

  async validation() {

    const data = this.myfbGroup.value;
    const url = "http://localhost:3000/login";
    await this.http.post(url, data).subscribe({
      next: data => {
        console.log(data);
        if (typeof data !== 'undefined' && data.toString().length > 0) {
          alert("Login Successfully");
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('userInfo', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        }
        else {
          alert("Please enter valid emailid & password");
        }
      },
      error: error => console.error('There was an error!', error)
    })

    // this.router.navigate([""]);

  }

}
