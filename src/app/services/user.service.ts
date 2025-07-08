import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'foodiee-user';

  constructor() {}

  signup(email: string, password: string): boolean {
    const user = {
      email,
      password,
      joined: new Date().toISOString()
    };
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    return true;
  }

  login(email: string, password: string): boolean {
    const userData = localStorage.getItem(this.storageKey);
    if (!userData) return false;

    const user = JSON.parse(userData);
    return user.email === email && user.password === password;
  }

  getUser(): { email: string; password: string; joined: string } | null {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}
