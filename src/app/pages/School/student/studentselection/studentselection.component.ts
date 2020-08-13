import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { NgbModalConfig,  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray, AbstractControl } from '@angular/forms';
import { RestApiService } from '../../../../shared/rest-api.services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { CommonService } from '../../../../shared/common.service'

import * as jQuery from 'jquery';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';

declare var $:JQueryStatic;

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
  btnVisible =  false;
  selectedStudentList: any[] = [];
  sectionList: any[] = []

  filterForm: FormGroup;
  sectionForm: FormGroup;

  constructor(private http:HttpClient, 
    private apiurl: RestApiService, 
    private commonService: CommonService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
    private route: ActivatedRoute, 
    private router: Router,
    private formBuilder: FormBuilder) {

    this.createForm();
    this.createSectionForm();
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
        processing: true,
       /*  columnDefs:[
          {orderable: false, targets: [0]}
        ], */
        ordering: false,
        //order: [[0, 'desc']]
      }; 

  }

  createForm()
  {
    this.filterForm = this.formBuilder.group({
      stdFilter             : [null],
    });
  }

  createSectionForm()
  {
    this.sectionForm = this.formBuilder.group({
      studsection             : [null, Validators.required],
    });
  }

  onCheckboxChangeFn( event: any)
  {
    console.log('----event----', event )
    this.selectedStudentList.push(event)
  }

  submitForm()
  {
    console.log( '----formvalue----', this.sectionForm)
    var stdFilter = (this.filterForm.value.stdFilter != null ? this.filterForm.value.stdFilter : '');
    var studsection = (this.sectionForm.value.studsection != null ? this.sectionForm.value.studsection : '');
    if( studsection !='')
    {
      console.log( '----studsection----', studsection)
      console.log( '----stdFilter----', stdFilter)
      console.log( '----selectedStudentList------',this.selectedStudentList )
      var jsonData = [];
      this.selectedStudentList.forEach( list => {
        jsonData.push({id: list})
      })

      console.log( '----jsonData------',jsonData )
      this.loader = true;
      var url =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/assignupdate/'+stdFilter+'/'+studsection;
      this.apiurl.create(url,jsonData).subscribe( list => {
        console.log('-----successs-----')

        this.commonService.changeMessage(['success', 'Assigned to section created successfully']);
        this.router.navigate(['/school/studentselection']);
        this.closepopup();        
        this.loader = false;

      },error => {
        console.log('----error----')
      });

    }
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

  assignedToSection(template)
  {
    console.log('------test-----')
    console.log( '----formvalue----', this.filterForm)
    console.log( '----selectedStudentList------',this.selectedStudentList )
    var stdFilter = (this.filterForm.value.stdFilter != null ? this.filterForm.value.stdFilter : '');
    if( stdFilter !='' && this.selectedStudentList.length > 0)
    {
      this.modalService.open( template , {ariaLabelledBy: 'modal-basic-title',size: 'xl'});
    }
    
  }

  closepopup()
  {
    this.modalService.dismissAll()
  }

  getStabdard()
  {
    setTimeout(() => {
      var url =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/master';
      this.apiurl.lists(url).subscribe( list => {
        console.log('---standard list----', list)
        this.studentStandard = list.standards;
        this.sectionList = list.sections;

        if( this.studentStandard.length > 0)
        {
          this.selectedStdId = 4;
          this.schoolStandardFilter({id:4})
          this.btnVisible = true;
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

          }else{
            this.commonService.loaderShowHide(false);
             this.loader             = false;
          }
        });
      },100);       

    }else{
        var url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/students';
        this.apiurl.lists(url).subscribe( lists => {
          this.data = lists.users;
          this.dtTrigger.next();
        });
    }
  }

  selectAll()
  {
    console.log('---dddd-----')
    if ($('.main').hasClass('allChecked')) {
      console.log('---aaaa----')
      $('.main').removeClass('allChecked')
        $('input[type="checkbox"]', '#table').prop('checked', false);
    } else {
      console.log('---bbbbb----')
      $('.main').addClass('allChecked')
        $('input[type="checkbox"]', '#table').prop('checked', true);
    }
    //$('.main').toggleClass('allChecked');

  }
  checkuncheckall()
  {
    
    /* if(this.isChecked == true)
    {
    this.isChecked = false;
    }
    else
    {
    this.isChecked = true;
    } */
  
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
