import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { RestApiService } from '../../../shared/rest-api.services';
import { throwError, Observable, BehaviorSubject } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

    //getlangId
    selectedActivityId = new BehaviorSubject<any>('')
    currentEditActivityId = this.selectedActivityId.asObservable();

  editActivityData(id: any) {

    this.selectedActivityId.next(id)
  }

}
