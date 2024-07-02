import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  test:Boolean=true;


  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    });

  }
  signup()
    {
      console.log("here signupForm",this.signupForm.value);
      this.userService.signup(this.signupForm.value).subscribe(
        (resp)=>{
          if (resp.isAdded) {
            console.log("succes");
            this.router.navigate(['signin']);
          } else {
            console.log("user already exists");

          }

        }
      );
    }

}
