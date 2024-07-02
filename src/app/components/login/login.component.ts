import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }
  login()
  {
    console.log("here login",this.loginForm.value);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]]
    });
  }
}
