import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { RestApiService } from '../../../shared/rest-api.services';
import { throwError, Observable, BehaviorSubject } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor() { }

    //getlangId
    selectedLanguageId = new BehaviorSubject<any>('')
    currentEditLangsId = this.selectedLanguageId.asObservable();

  editLanguageData(id: any) {

    this.selectedLanguageId.next(id)
  }

}
