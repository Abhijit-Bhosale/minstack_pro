import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registationpage',
  templateUrl: './registationpage.component.html',
  styleUrls: ['./registationpage.component.css']
})
export class RegistationpageComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  myfbGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
    usermobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9_-]{10,10}')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[a-zA-z0-9]*')]],

  });

  returnUrl: string;

  ngOnInit(): void {
    this.returnUrl = '/dashboard';
  }
  async validation() {

    const data = this.myfbGroup.value;
    const url = "http://localhost:3000/registration";
    await this.http.post(url, data).subscribe({
      next: data => {
        console.log(data);
        if (typeof data !== 'undefined' && data.toString().length > 0) {
          alert("Registration Successfully");
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('userInfo', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        }
        else {
          alert("There was an error!");
        }
      },
      error: error => console.error('There was an error!', error)
    })


  }


}
