import { Component, OnInit, ViewChild } from '@angular/core';

import { RestApiService } from '../../../shared/rest-api.services';
import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { CommonService } from '../../../shared/common.service'
import { StaffService } from '../staff.service';
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

  loader:boolean = false;
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
    private commonService: CommonService,
    private staffService: StaffService,
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

  editData(id)
  {
    
    this.staffService.editStaffData(id)
    this.router.navigate(['/staff/add']);
  }

  deleteData( id )
  {
    swal.fire({
      title: "Are you sure?",
      text: "Do you want to Remove Staff?",
      //type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
    .then((willDelete) => {
      if( willDelete.value )
      {
        this.commonService.loaderShowHide(true)
        this.loader = true;

        let url='http://sms.akst.in/public/api/staff/delete/'+id;
          this.apiService.create(url, {}).subscribe( lists => {
            console.log('---success delete-----');
            this.commonService.loaderShowHide(false)
            this.loader = false;
            this.refreshPage();
          },error => {
            console.log('---errror---')
          })
      }
    })
  }

  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/staff/list']);
  }

  dataList()
  {
    setTimeout(() => {
      var url = 'http://sms.akst.in/public/api/staffs';
            this.apiService.lists(url).subscribe( lists => {
              console.log('----lists----', lists)
              this.Listitems = lists.users;
              if( this.Listitems != undefined && this.Listitems.length > 0)
              {
                this.data = this.Listitems;
                this.dtTrigger.next();
              } 
            })
    }, 1000);
  }


}
