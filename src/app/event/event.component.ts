import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  allownewuser=false;
  usercreatedstatus="no user is created yet ";
  username='is it working';
  isUserCreated = false;

constructor(){
setTimeout(()=>{
  this.allownewuser=true;

},3000)}
changestatus(){
  this.isUserCreated= true;
  this.usercreatedstatus="user is created "
}

onUpdateUser(event:Event){
  this.username= (event.target as HTMLInputElement).value;
  console.log(event);
}
ngOnInit(): void {
  
}


 


}
 // name:string = "varun";

// clickfun():void{
//   this.name="click function is working"
// }
// over():void{
//   this.name="mouse over is working"
// }
// change():void{
//   this.name="change function is working"
// }