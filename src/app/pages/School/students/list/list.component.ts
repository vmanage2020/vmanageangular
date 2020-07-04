import { Component, OnInit, ViewChild } from '@angular/core';

import { RestApiService } from '../../../../shared/rest-api.services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  @ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};  
  dataTable: any;
  SListitems: any[] = [];
  data: any;
  dtTrigger: Subject<any> = new Subject();

  constructor(private apiurl: RestApiService) { }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  ngOnInit(): void {

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
      this.apiurl.lists('/students').subscribe( lists => {
        //console.log('----lists----',lists)
        this.SListitems = lists.users;

       
        //console.log( '-----SListitems------',this.SListitems )

        if( this.SListitems.length > 0)
        {

        this.data = this.SListitems;
        this.dtTrigger.next();

        }
       
      });
      

    },100);
  }

}
