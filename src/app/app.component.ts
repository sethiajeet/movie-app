import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './Login/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-app';
  public theme: string = "";

  ngOnInit(){
    this.getTheme();
  }

  changeTheme(){
    if(this.theme === "") this.theme = 'alternate';
    else this.theme = '';
    this.setTheme();
  }

  setTheme(){
    localStorage.setItem('Theme' , this.theme);
  }

  getTheme(){
    this.theme = localStorage.getItem('Theme') || "";
  }
}
