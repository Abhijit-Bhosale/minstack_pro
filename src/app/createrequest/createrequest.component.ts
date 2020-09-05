import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.component.html',
  styleUrls: ['./createrequest.component.css']
})
export class CreaterequestComponent implements OnInit {

  myfbGroup = this.fb.group({
    username: [''],
    usermobile: [''],
    email: [''],
    moveFrom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
    moveTo: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
  });

  userID: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))[0];
    console.log("Load Info");
    console.log(userInfo);
    this.userID = userInfo.ID;

    this.myfbGroup.patchValue({ 'username': userInfo.UNAME, 'usermobile': userInfo.UMOBILE, 'email': userInfo.UEMAIL })
  }


  ngOnInit(): void {
    this.returnUrl = '/dashboard';
  }
  returnUrl: string;

  async validation() {

    const data = this.myfbGroup.value;
    data.userID = this.userID;
    console.log("Submite");
    console.log(data);
    const url = "http://localhost:3000/addrequest";

    await this.http.post(url, data).subscribe({
      next: data => {
        console.log(data);
        if (typeof data !== 'undefined' && data.toString().length > 0) {
          alert("Request submitted Successfully");
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
