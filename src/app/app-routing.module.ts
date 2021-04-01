import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
