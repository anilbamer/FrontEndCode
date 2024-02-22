import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup; 
  submitted: boolean = false;
  successMessage: string = '';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
    this.http.post('https://localhost:7071/api/Login/LoginPage', form).subscribe(
      (result: any) => {
        this.successMessage = 'Data inserted successfully';
        console.log(result);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
