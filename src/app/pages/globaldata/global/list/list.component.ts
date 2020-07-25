import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../../../shared/rest-api.services';

import { GlobalService } from '../global.service';

import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { AddComponent } from '../add/add.component';

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
    private modalService: NgbModal,
    private globalService: GlobalService,
    private config: NgbModalConfig,
    private route: ActivatedRoute, 
    private router: Router
  ) {
    this.paramName = this.router.url.split('/')[2]; 
    this.autoLoad();
   }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  autoLoad()
  {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
    }

    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
        }
    });
  }


  ngOnInit(): void {   
   
    //console.log(  '----paramName-----',this.paramName )
    this.dataList();
    

    if( this.paramName !='')
    {

      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
      }; 

      this.PageLabel = ((this.paramName == 'academicboard') ? 'Academic Board':
      ((this.paramName == 'activity') ? 'Activity': 
      ((this.paramName == 'language') ? 'Language':
      ((this.paramName == 'groupname') ? 'Elective Group':
      ((this.paramName == 'bloodgroup') ? 'Blood Group':
      ((this.paramName == 'religion') ? 'Religion':
      ((this.paramName == 'community') ? 'Race/Community':
      ((this.paramName == 'certificatename') ? 'Certificate':
      ((this.paramName == 'citizen') ? 'Citizen':
      ((this.paramName == 'section') ? 'section':
      ((this.paramName == 'standard') ? 'Grade/Standard':
      ((this.paramName == 'academicyear') ? 'Academic Year':
      ((this.paramName == 'catagorytype') ? 'Category Type':
      ((this.paramName == 'designationtype') ? 'Designation Type':
      ((this.paramName == 'stafftype') ? 'Staff Type':
      ((this.paramName == 'department') ? 'Department':
      ((this.paramName == 'degree') ? 'Degree':
      ((this.paramName == 'grade') ? 'Grade':
      ((this.paramName == 'status') ? 'Status': '')))))))))))))))))));
    }
   
  }

  dataList()
  {
    setTimeout(() => {

      if( this.paramName !='')
      {

            var urlName = ((this.paramName == 'academicboard') ? 'academicboard':
            ((this.paramName == 'activity') ? 'activity': 
            ((this.paramName == 'language') ? 'language':
            ((this.paramName == 'groupname') ? 'groupname':
            ((this.paramName == 'bloodgroup') ? 'bloodgroup':
            ((this.paramName == 'religion') ? 'religion':
            ((this.paramName == 'community') ? 'community':
            ((this.paramName == 'certificatename') ? 'certificatename':
            ((this.paramName == 'citizen') ? 'citizen':
            ((this.paramName == 'section') ? 'section':
            ((this.paramName == 'standard') ? 'standard':
            ((this.paramName == 'academicyear') ? 'academicyear': 
            ((this.paramName == 'catagorytype') ? 'catagorytype':
            ((this.paramName == 'designationtype') ? 'designationtype':
            ((this.paramName == 'stafftype') ? 'academicyear':
            ((this.paramName == 'department') ? 'academicyear':
            ((this.paramName == 'degree') ? 'academicyear':
            ((this.paramName == 'degree') ? 'academicyear':
            ((this.paramName == 'degree') ? 'academicyear': '')))))))))))))))))));                 
          
            var url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/'+urlName;
            this.apiService.lists(url).subscribe( lists => {
            //this.Listitems = lists.academic_boards;  

            this.Listitems = ((this.paramName == 'academicboard') ? lists.academic_boards :
                    ((this.paramName == 'activity') ?  lists.activities : 
                    ((this.paramName == 'language') ? lists.languages :
                    ((this.paramName == 'groupname') ? lists.groupnames :
                    ((this.paramName == 'bloodgroup') ? lists.bloodgroups :
                    ((this.paramName == 'religion') ? lists.religions :
                    ((this.paramName == 'community') ? lists.communities :
                    ((this.paramName == 'certificatename') ? lists.certificatenames :
                    ((this.paramName == 'citizen') ? lists.citizens :
                    ((this.paramName == 'section') ? lists.sections :
                    ((this.paramName == 'standard') ? lists.standards :
                    ((this.paramName == 'academicyear') ? lists.academicyears :
                    ((this.paramName == 'catagorytype') ? lists.catagorytypes:
                    ((this.paramName == 'designationtype') ? lists.designationtypes:
                    ((this.paramName == 'stafftype') ? lists.academicyears:
                    ((this.paramName == 'department') ? lists.academicyears:
                    ((this.paramName == 'degree') ? lists.academicyears:
                    ((this.paramName == 'grade') ? lists.academicyears:
                    ((this.paramName == 'academicyear') ? lists.standards: ''))))))))))))))))))); 

            console.log( '-----lists------',lists )

            if( this.Listitems != undefined && this.Listitems.length > 0)
            {

            this.data = this.Listitems;
            this.dtTrigger.next();

            } 
            })
        
      }
  },100)
     /*  this.Listitems = ((this.paramName == 'academicboard') ? this.globalService.dataStore.globallist.academic_boards :
                    ((this.paramName == 'activity') ?  this.globalService.dataStore.globallist.activities : 
                    ((this.paramName == 'language') ? this.globalService.dataStore.globallist.languages :
                    ((this.paramName == 'groupname') ? this.globalService.dataStore.globallist.groupnames :
                    ((this.paramName == 'bloodgroup') ? this.globalService.dataStore.globallist.bloodgroups :
                    ((this.paramName == 'religion') ? this.globalService.dataStore.globallist.religions :
                    ((this.paramName == 'community') ? this.globalService.dataStore.globallist.communities :
                    ((this.paramName == 'certificatename') ? this.globalService.dataStore.globallist.certificatenames :
                    ((this.paramName == 'citizen') ? this.globalService.dataStore.globallist.citizens :
                    ((this.paramName == 'standard') ? this.globalService.dataStore.globallist.standards :
                    ((this.paramName == 'academicyear') ? this.globalService.dataStore.globallist.academicyears : '')))))))))));   

      if(this.Listitems != undefined )
      {
        console.log('--aaaaa-----')
        if( this.Listitems.length > 0 ) {
          console.log('----bbbbbbb----', this.Listitems)
          this.data = this.Listitems;
            this.dtTrigger.next();
          
        }else {
  
          setTimeout(() => { this.dataList() }, 100);
        }
      }   */
      

      
    
  }

  editData(id)
  {
    console.log('---id----',id)
    this.globalService.editglobalData(id)
    this.openCreateModal();
  }

  deleteData(id)
  {
    console.log('-----id-----',id)

    swal.fire({
      title: "Are you sure?",
      text: "Do you want to Remove Service?",
      //type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
    .then((willDelete) => {
      if( willDelete.value )
      {
        console.log('-----accepted id----', id)

        var urlName = ((this.paramName == 'academicboard') ? 'academicboard':
            ((this.paramName == 'activity') ? 'activity': 
            ((this.paramName == 'language') ? 'language':
            ((this.paramName == 'groupname') ? 'groupname':
            ((this.paramName == 'bloodgroup') ? 'bloodgroup':
            ((this.paramName == 'religion') ? 'religion':
            ((this.paramName == 'community') ? 'community':
            ((this.paramName == 'certificatename') ? 'certificatename':
            ((this.paramName == 'citizen') ? 'citizen':
            ((this.paramName == 'section') ? 'section':
            ((this.paramName == 'standard') ? 'standard':
            ((this.paramName == 'academicyear') ? 'academicyear': 
            ((this.paramName == 'catagorytype') ? 'catagorytype':
            ((this.paramName == 'designationtype') ? 'designationtype':
            ((this.paramName == 'stafftype') ? 'academicyear':
            ((this.paramName == 'department') ? 'academicyear':
            ((this.paramName == 'degree') ? 'academicyear':
            ((this.paramName == 'grade') ? 'academicyear':
            ((this.paramName == 'status') ? 'academicyear': ''))))))))))))))))))); 

          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/'+urlName+'/delete/'+id;
          this.apiService.create(url, {}).subscribe( lists => {
            console.log('---success delete-----');
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

      var urlName = ((this.paramName == 'academicboard') ? 'academicboard':
            ((this.paramName == 'activity') ? 'activity': 
            ((this.paramName == 'language') ? 'language':
            ((this.paramName == 'groupname') ? 'groupname':
            ((this.paramName == 'bloodgroup') ? 'bloodgroup':
            ((this.paramName == 'religion') ? 'religion':
            ((this.paramName == 'community') ? 'community':
            ((this.paramName == 'certificatename') ? 'certificatename':
            ((this.paramName == 'citizen') ? 'citizen':
            ((this.paramName == 'section') ? 'section':
            ((this.paramName == 'standard') ? 'standard':
            ((this.paramName == 'academicyear') ? 'academicyear': 
            ((this.paramName == 'catagorytype') ? 'catagorytype':
            ((this.paramName == 'designationtype') ? 'designationtype':
            ((this.paramName == 'stafftype') ? 'academicyear':
            ((this.paramName == 'department') ? 'academicyear':
            ((this.paramName == 'degree') ? 'academicyear':
            ((this.paramName == 'grade') ? 'academicyear':
            ((this.paramName == 'status') ? 'academicyear': ''))))))))))))))))))); 

      this.router.navigate(['/global/'+urlName+'/list']);
  }

  openCreateModal(): void {

    this.modalService.open(AddComponent, {ariaLabelledBy: 'modal-basic-title',size: 'xl'});

  }

}
