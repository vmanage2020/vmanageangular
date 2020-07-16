import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from '../../../../shared/rest-api.services';
//import { GlobalService } from '../global.service';
import { ActivatedRoute, Router,Params, NavigationEnd, RouterState } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UserserviceService } from '../userservice.service'; 
import swal from 'sweetalert2';
/* import 'rxjs/add/operator/map'; */

@Component({
  selector: 'app-loginadd',
  templateUrl: './loginadd.component.html',
  styleUrls: ['./loginadd.component.scss']
})
export class LoginaddComponent implements OnInit {
 // @ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any> = new Subject();
  dataTable: any;
  Listitems:any;
  paramName: any;
  data: any;
  dropdownSchoolArray: any = ["","Vidyalakshmi Matric School","Vidyalakshmi CBSE School","Vidyalakshmi ICSE school"];
  dropdownGroupArray: any = ["","Group-1","Group-2","Group-3"];

  constructor( private apiService: RestApiService, private http:HttpClient, private srvCart: UserserviceService, 
    // private modalService: NgbModal,
     //private globalService: GlobalService,
     private config: NgbModalConfig,
     private route: ActivatedRoute, 
    
     private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
  }



var url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginusers';
    this.apiService.lists(url).subscribe( lists => {

      this.Listitems =  lists.data ;   
     // console.log( '-----lists------',this.Listitems.grps_desc )
      if( this.Listitems != undefined && this.Listitems.length > 0)
      {

      this.data = this.Listitems;
     
      this.dtTrigger.next();
   

      } 
  })

  }


 /*  editData(id)
  {
    console.log('---id----',id)
   
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

                let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginusers/delete/'+id;
          this.apiService.create(url, {}).subscribe( lists => {
            console.log('---success delete-----');
           // this.refreshPage();
          },error => {
            console.log('---errror---')
          })
      }
    })
  } */

  navigateadd()
  {
    this.router.navigate(['/groupadd']);
  }
 /*  logviewf()
  {
    this.router.navigate(['/loginviewform']);
    //routerLink="/loginviewform/{{user.stu_prf_id_pk}}"
  } */
  navigateview($event:any)
  {
    console.log($event);
    this.srvCart=$event;
  }
}

