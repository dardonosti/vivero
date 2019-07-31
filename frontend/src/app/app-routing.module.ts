import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

export const Routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
