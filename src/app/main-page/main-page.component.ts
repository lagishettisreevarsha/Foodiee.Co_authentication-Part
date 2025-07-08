import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  showLogin = false;
  showSignup = false;
  isLoginMode = true;

  email = '';
  password = '';
  errorMsg = '';

  constructor(private userService: UserService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMsg = '';
  }

  closeForm() {
    this.showLogin = false;
    this.showSignup = false;
    this.isLoginMode = true;
    this.email = '';
    this.password = '';
    this.errorMsg = '';
  }

  onSubmit() {
    if (this.isLoginMode) {
      const success = this.userService.login(this.email, this.password);
      if (success) {
        this.router.navigate(['/home']);
      } else {
        this.errorMsg = 'Invalid credentials!';
      }
    } else {
      this.userService.signup(this.email, this.password);
      this.router.navigate(['/home']);
    }
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
