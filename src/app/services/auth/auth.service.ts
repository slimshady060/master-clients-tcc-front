import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private readonly storageKey = 'loggedInStatus';

  constructor() {
    this.loadLoggedInStatus();
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      this.saveLoggedInStatus();
      return true;
    } else {
      this.loggedIn = false;
      this.saveLoggedInStatus();
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.saveLoggedInStatus();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private loadLoggedInStatus(): void {
    const status = localStorage.getItem(this.storageKey);
    this.loggedIn = status === 'true';
  }

  private saveLoggedInStatus(): void {
    localStorage.setItem(this.storageKey, this.loggedIn.toString());
  }
}
