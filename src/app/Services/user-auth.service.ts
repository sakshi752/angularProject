import { Injectable } from '@angular/core';

@Injectable({
  // providedIn: null
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedIn: boolean = false;
  private loggedInUsername: string ="";

  constructor() {}

  login(username: string, password: string): boolean {
    this.isLoggedIn = true;
    this.loggedInUsername = username;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUsername = "";
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  getLoggedInUsername(): string  {
    return this.loggedInUsername;
  }
}
