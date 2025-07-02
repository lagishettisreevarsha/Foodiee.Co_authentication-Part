import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {trigger,transition,style,animate} from '@angular/animations';


@Component({
  selector: 'app-main-page',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  
})
export class MainPageComponent {
  showLogin=false;
  showSignup=false;
  loginForm:FormGroup;
  signupForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router){
    
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });

    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  login(){
    if (this.loginForm.valid){
      const email=this.loginForm.value.email;
      const password=this.loginForm.value.password

      const hardcodedEmail = 'foodiee@gmail.com';
      const hardcodedPassword = '123';

      if (email===hardcodedEmail && password===hardcodedPassword){
        this.router.navigate(['home'])
      }else{
        alert('Invalid email or password')
      }
    }
  }
  signup(){
    if (this.signupForm.valid){
      this.router.navigate(['/home'])
    }
  }

  closeForms(){
    this.showLogin=false
    this.showSignup=false
  }
}
