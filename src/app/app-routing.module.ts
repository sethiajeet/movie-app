import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { MoviesPageComponent } from './Movies/movies-page/movies-page.component';

const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'movies-page' , component: MoviesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
