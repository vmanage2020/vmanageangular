import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from '../../../../shared/rest-api.services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';

declare var $;

@Component({
  selector: 'app-stuentlist',
  templateUrl: './stuentlist.component.html',
  styleUrls: ['./stuentlist.component.scss']
})
export class StuentlistComponent implements OnInit {
  Surl='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students';
 mygrou=[1,2,3,4,5];

  SListitems: any[] = [];
  contentlist: any[] =[];
  objectKeys = Object.keys;

  @ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};  
  dataTable: any;

  data: any;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http:HttpClient, private apiurl: RestApiService) {

    
   }

   displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  ngOnInit() {

   
      this.studentsList();
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
      }; 
     

  }


  studentsList()
  {
    
    setTimeout(() => {
      var url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students';
      this.apiurl.lists(url).subscribe( lists => {
        //console.log('----lists----',lists)
        this.SListitems = lists.users;

       
        //console.log( '-----SListitems------',this.SListitems )

        if( this.SListitems.length > 0)
        {
          /*
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            columns: [
              {title: 'Sl.No', data: 'col_code_fk'},
              {title: 'Application Date', data: 'stu_prf_app_date'},
              {title: 'Application ID', data: 'stu_prf_app_No'},
              {title: 'Student Name', data: 'stu_stud_lname'},
              {title: 'Gender', data: 'stu_prf_sex'}
              //{title: 'Action', data: null },
            ],
            data: this.SListitems
          };
          */ 

        this.data = this.SListitems;
        this.dtTrigger.next();

        }
       
      });
      

    },100);
  }

}
