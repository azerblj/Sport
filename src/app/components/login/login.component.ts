import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  msg:string='';

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }
  login()
  {
    console.log("here login",this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (resp)=>{
        console.log("here rsp login from BE",resp);
        if (resp.role=='admin') {
          this.router.navigate(['admin']);


        } else if(resp.role=='user') {
          this.router.navigate(['']);

        }
        else{
          this.msg="erreur in EMAIL or PWD";
        }

      }
    )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]]
    });

  }
}
