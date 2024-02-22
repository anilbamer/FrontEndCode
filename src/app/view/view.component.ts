import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  userdata:any[]=[]
  loginForm:FormGroup=new FormGroup({})
  constructor(
    private route:Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
    this.getuserdetails()
  }
getuserdetails()
{
  this.http.get('https://localhost:7071/api/Login/GetDetails').subscribe((response:any)=>{
    console.log(response);
    this.userdata=response.resultData
  })
}
submit(){
const form = this.loginForm.value
console.log(this.userdata)
this.userdata.forEach((user:any)=>{ 
  console.log(user)
  if(user.username == form.username && user.password == form.password)
  {   
    this.route.navigate(['/exg']) 
  } 
  })
}
}
