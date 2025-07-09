import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersKey = 'foodiee-users';      // Array of all users
  private sessionKey = 'foodiee-session';  // Currently logged-in user email

  constructor() {}

  private generateToken(): string {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  }

  // Signup and store multiple users
  signup(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');

    const exists = users.find((u: any) => u.email === email);
    if (exists) return false;

    const newUser = {
      email,
      password,
      joined: new Date().toISOString(),
      token: this.generateToken()
    };

    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    localStorage.setItem(this.sessionKey, email); // set current session
    return true;
  }

  // Login from stored array
  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');

    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem(this.sessionKey, email); // store session
      return true;
    }
    return false;
  }

  // Check login status
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.sessionKey);
  }

  // Get current user info
  getUser(): any | null {
    const email = localStorage.getItem(this.sessionKey);
    if (!email) return null;

    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    return users.find((u: any) => u.email === email) || null;
  }

  // Logout only clears session
  logout(): void {
    localStorage.removeItem(this.sessionKey);
  }
}
