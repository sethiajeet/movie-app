import { AuthService } from './../../helpers/auth.service';
import { Component, OnInit} from '@angular/core';
import { GetLoginAPIService } from '../get-login-api.service';
import { Router } from '@angular/router';
import { TokenService } from '../../token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username?: string;
  public password?: string;
  public isRequested: boolean = false;
  public darkTheme: boolean = false;
  formGroup : FormGroup = new FormGroup({});

  constructor(
    private getLoginAPIService : GetLoginAPIService,
    private router: Router,
    private tokenService: TokenService,
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username : new FormControl('' , [Validators.required]),
      password : new FormControl('' , [Validators.required])
    })
  }

  fireLogin(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(
      (result) => {
          console.log(result);
          if (result && result.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(result.data.token));
          }

          this.isRequested = true;
          this.router.navigateByUrl('/movies-page'); 
      },
      (error) =>{
        window.alert("Invalid Login Credentials");
      });
    }
    else window.alert("Please enter username and password");
  }

  changeTheme(){
    this.darkTheme =  !this.darkTheme;
    console.log("theme is " , this.darkTheme);
  }



}
