import { Component, OnInit, ViewChild } from '@angular/core';

import { RestApiService } from '../../../shared/rest-api.services';
import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';

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
  Listitems: any[] = [];
  data: any;
  dtTrigger: Subject<any> = new Subject();
  paramName: any;
  PageLabel: any;
  

  constructor(
    private apiService: RestApiService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  ngOnInit(): void {

    this.dataList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }; 

  }

  dataList()
  {
    setTimeout(() => {
      var url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/staff';
            this.apiService.lists(url).subscribe( lists => {
              this.Listitems = lists.staff;
              if( this.Listitems != undefined && this.Listitems.length > 0)
              {
                this.data = this.Listitems;
                this.dtTrigger.next();
              } 
            })
    }, 1000);
  }


}
