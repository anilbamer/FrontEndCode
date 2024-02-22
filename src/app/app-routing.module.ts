import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { WorkComponent } from './work/work.component';
import { EventComponent } from './event/event.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'res',component:ExampleComponent},
  {path:'bind',component:WorkComponent},
  {path:'event',component:EventComponent},
  {path: 'exg',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
