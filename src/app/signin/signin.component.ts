import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: number;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  details: any[] = [];   
  signInForm!: FormGroup;
  submitted: boolean = false;
  successMessage: string = '';

  constructor(
    private router:Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
    this.getData();
  }

  getData() {
    this.http.get<any[]>('https://localhost:7071/api/Login/UserInformations').subscribe(
      (result:any) => {
        console.log(result);
        this.details = result.resultData;
        console.log(this.details);
      }
    );
  }

  deleteUser(id: any) {
    this.http.delete(`https://localhost:7071/api/Login/DeleteUserInfo?id=${id}`).subscribe(
      (result) => {
        console.log("deleted", result);
        this.getData();
      }
    )
  }

  get formControls() {
    return this.signInForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    let form = this.signInForm.value;
    this.http.post<any>('https://localhost:7071/api/Login/LoginPage', form).subscribe(
      (result: any) => {
        this.successMessage = 'Data inserted successfully';
        console.log(result);
        this.signInForm.reset();  
        this.submitted = false; 
        this.getData();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
