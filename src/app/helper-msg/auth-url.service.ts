import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthURLService {

  constructor() { }

   //public authUrl:string = 'http://localhost:3355/api/auth/public/cred/';
   public authUrl:string = 'http://localhost:3355/api/auth/public/cred/';
  
}
