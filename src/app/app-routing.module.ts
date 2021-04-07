import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'users', component: UsersComponent },
  { path: 'repositories', component: RepositoriesComponent },

  { path: '', component: LandingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
