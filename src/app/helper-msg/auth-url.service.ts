import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthURLService {

  constructor() { }

   public authUrl:string = 'http://localhost:3355/api/admin/';
  // public authUrl:string = 'http://64.227.8.158:3355/api/admin/';
  
}
