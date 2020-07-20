import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from '../../../../shared/rest-api.services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { CommonService } from '../../../../shared/common.service'

import * as _ from 'lodash';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-studentselection',
  templateUrl: './studentselection.component.html',
  styleUrls: ['./studentselection.component.scss']
})
export class StudentselectionComponent implements OnInit {

  Surl='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students/selected';
 mygrou=[1,2,3,4,5];

  SListitems: any[] = [];
  contentlist: any[] =[];
  objectKeys = Object.keys;
  studentStandard: any;
  loader: boolean = false;
  selectedStdId = 0;

  @ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};  
  dataTable: any;
  isChecked = false;
  data: any;
  dtTrigger: Subject<any> = new Subject();

  constructor(private http:HttpClient, private apiurl: RestApiService, private commonService: CommonService) {

    
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

  onCheckboxChangeFn( event: any)
  {
    console.log('----event----', event )
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

  assignedToSection()
  {
    console.log('------test-----')
  }

  getStabdard()
  {
    setTimeout(() => {
      var url =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/master';
      this.apiurl.lists(url).subscribe( list => {
        //console.log('---standard list----', list.standards)
        this.studentStandard = list.standards;

        if( this.studentStandard.length > 0)
        {
          this.selectedStdId = 4;
          this.schoolStandardFilter({id:4})
        }       

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

  checkuncheckall()
  {
    if(this.isChecked == true)
    {
    this.isChecked = false;
    }
    else
    {
    this.isChecked = true;
    }
  
  }

  studentsList()
  {
    
    setTimeout(() => {
      var url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students/selected';
      this.apiurl.lists(url).subscribe( lists => {
        console.log('----lists----',lists)
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
