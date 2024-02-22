import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  name: string="varun bhamar"
  employees=['madhu','arun','kiran']
  userid:number =10
  userstatus="offline"
  
  

  waste ={
    title:"software Engineer",
    name:"karan",
    salary:120000,
    src:"https://images.unsplash.com/photo-1700587085844-b96c27958df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    alt:'profile pic'
  }

  getname(data:number):string{
    if(data === 1)
    {   
       return 'big hello from my side';
    }
    else {
      return 'return hello with value'+data;

    }
  }

  getstatus(){ 
    return this.userstatus;
 }

}
