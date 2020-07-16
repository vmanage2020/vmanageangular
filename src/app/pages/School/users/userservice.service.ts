import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  valget:any;
  constructor() { 
    console.log(this.valget+"__________goog");
  }
  
}
