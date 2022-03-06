import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.removeItem("USER_KEY");
    localStorage.removeItem("TOKEN_KEY");
   // window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log(token);
    
    localStorage.setItem("TOKEN_KEY",token);
    console.log("*************");
    var tokean=localStorage.getItem("TOKEN_KEY");
    console.log(tokean);
    
    // window.sessionStorage.removeItem(TOKEN_KEY);
    // window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem("TOKEN_KEY");
    //return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.setItem("USER_KEY",JSON.stringify(user));
    // window.sessionStorage.removeItem(USER_KEY);
    // window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user= localStorage.getItem("USER_KEY");
    // const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn()
  { 
    var access_token= localStorage.getItem("TOKEN_KEY");
    if(access_token == null)
    {
      return false;
    }
    else
    {
      //console.log("token null nahi hain");
      return true;
    }

  }


  getUserName()
  {
    var node =  this.getUser()
    return node.username;
  }

}
