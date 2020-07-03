

import { Injectable } from '@angular/core';
import {BehaviorSubject,throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //Loader window show / hide
  private loader = new BehaviorSubject<boolean>(false)
  loaderShow: any;
  currentMessage: any;
  //Alert Messages
  private messageSource = new BehaviorSubject<any>([])



  constructor() {
    this.loaderShow = this.loader.asObservable();
    this.currentMessage = this.messageSource.asObservable();
   }

  //Loader window show / hide  --  Boolean value true/false
  loaderShowHide(boolValue: boolean) {
    this.loader.next(boolValue)
  }

  //Alert Messagea
  changeMessage(message: any) {
    this.messageSource.next(message)
  }

}
