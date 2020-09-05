import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {




  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  myfbGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
    usermobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9_-]{10,12}')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    moveFrom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
    moveTo: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
  });
  ngOnInit(): void {
  }

  async validation() {

    const data = this.myfbGroup.value;
    const url = "http://localhost:3000/adduser";
    await this.http.post(url, data).toPromise();
    alert("Your Entery is Added")
    // this.router.navigate([""]);

  }

}
