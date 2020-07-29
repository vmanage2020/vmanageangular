import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { RestApiService } from '../../shared/rest-api.services';

import { throwError, Observable, BehaviorSubject } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient, private restApiService: RestApiService) { 
    
  }


   /**
   * method
   * @name handleError
   * @description An helper method to handle request error
   *
   * @private
   * @param error
   *
   * @returns any
   */
  private handleError(error: HttpErrorResponse) {
    const message = get(error, 'message') || 'Something bad happened; please try again later.';
    return throwError(message);
  }

   //getstaffId
   selectedstaffId = new BehaviorSubject<any>('')
   currentEditStaffId = this.selectedstaffId.asObservable();
 
   editStaffData(id: any) {
    
     this.selectedstaffId.next(id)

   }

   
}
