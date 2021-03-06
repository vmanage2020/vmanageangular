import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from '../../../../shared/rest-api.services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CommonService } from '../../../../shared/common.service'
import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
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
  studentStandard: any;
  loader: boolean = false;
 

  @ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};  
  dataTable: any;

  data: any;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http:HttpClient, 
    private apiurl: RestApiService,  
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router) {

    
   }

   displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }



  ngOnInit() {


      this.getStabdard();
      this.studentsList();
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
      }; 
      
  }

  makePaid(studId, statusVal)
  {
    swal.fire({
      title: "Are you sure?",
      text: "Do you want to amount Pay?",
      //type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
    .then((willDelete) => {
      if( willDelete.value )
      {
        setTimeout(() => {

          this.commonService.loaderShowHide(true);
          this.loader             = true;
  
          var url =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/statusupdate/'+studId+'/'+statusVal;
          this.apiurl.create(url,{}).subscribe( statusChange => {
            console.log('---student status change----', statusChange )  
            
            //this.statusMsg = 'Status Updated Successfully';
  
            this.commonService.loaderShowHide(false);
            this.loader             = false;
            this.refreshPage();
          },error => {
            console.log('---errror---')
          })
        },100);
      }
    })
  }

  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/school/studentlist']);

  }

  standardName(id)
  {
    var resStandard = '';
    if( this.studentStandard != undefined && this.studentStandard.length >0)
    {
      this.studentStandard.forEach( std => {
        if(std.id == id){
          resStandard = std.name;
        }
      })
    }
    return resStandard
  }

  getStabdard()
  {
    setTimeout(() => {
      var url =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/master';
      this.apiurl.lists(url).subscribe( list => {
        //console.log('---standard list----', list.standards)
        this.studentStandard = list.standards;
      },error => {
        console.log('---errror---')
      })
    },100);
   
  }

  schoolStandardFilter( event: any)
  {
    console.log('---event----', event)
    if( event != undefined)
    {
      console.log('---id----', event.id )

      setTimeout(() => {

        this.commonService.loaderShowHide(true);
        this.loader             = true;
        
        var url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students';
        this.apiurl.lists(url).subscribe( lists => {
          if( lists.users.length >0)
          {
            var studData = [];
            lists.users.forEach( lis => {
              if(lis.stu_prf_current_Semester == event.id)
              {
                studData.push(lis)
              }
            })

            this.data = studData;
            this.dtTrigger.next();

            this.commonService.loaderShowHide(false);
             this.loader             = false;

          }
        });
      },100);       

    }else{
        this.data = this.SListitems;
        this.dtTrigger.next();
    }
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
