import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';

import { RestApiService } from '../../../shared/rest-api.services';
import { throwError, Observable, BehaviorSubject } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  paramName: any;

  public _globallist = new BehaviorSubject<[]>([]);
  public dataStore:{ globallist: any } = { globallist: [] };
  readonly globallist = this._globallist.asObservable();


  constructor(private httpClient: HttpClient, 
    private restApiService: RestApiService,
    private route: ActivatedRoute, 
    private router: Router
    ) { 

      this.paramName = this.router.url.split('/')[2]; 
      console.log('-----service param here----', this.paramName )

      var urlName = ((this.paramName == 'academicboard') ? 'academicboard':
      ((this.paramName == 'activity') ? 'activity': 
      ((this.paramName == 'language') ? 'language':
      ((this.paramName == 'groupname') ? 'groupname':
      ((this.paramName == 'bloodgroup') ? 'bloodgroup':
      ((this.paramName == 'religion') ? 'religion':
      ((this.paramName == 'community') ? 'community':
      ((this.paramName == 'certificatename') ? 'certificatename':
      ((this.paramName == 'citizen') ? 'citizen':
      ((this.paramName == 'standard') ? 'standard':
      ((this.paramName == 'academicyear') ? 'academicyear': '')))))))))));            

      
        //this.globalList('/'+urlName);

        
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

  globalList( url ){
    this.restApiService.lists(url).subscribe((data: any) => {
      
      this.dataStore.globallist = data;
      this._globallist.next(Object.assign({}, this.dataStore).globallist);
       //console.log(this.dataStore);

    },
      catchError(this.handleError)
    );
  }

//getbidId
selectedglobalId = new BehaviorSubject<any>('')
currentEditglobalId = this.selectedglobalId.asObservable();

  editglobalData(id: any)
  {
    this.selectedglobalId.next(id)
  }


}
