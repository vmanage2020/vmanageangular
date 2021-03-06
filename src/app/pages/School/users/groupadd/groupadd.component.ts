import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from '../../../../shared/rest-api.services';
//import { GlobalService } from '../global.service';
import { ActivatedRoute, Router, Params, NavigationEnd, RouterState } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';
import swal from 'sweetalert2';

@Component({
  selector: 'app-groupadd',
  templateUrl: './groupadd.component.html',
  styleUrls: ['./groupadd.component.scss']
})


export class GroupaddComponent implements OnInit {
@ViewChild(DataTableDirective, {static: false})
  private datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any> = new Subject();
  dataTable: any;
  Listitems:any;
  paramName: any;
  data: any;
  
  
  constructor( private apiService: RestApiService,
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
    }; 
    
    var url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroups';
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


  editData(id:any)
  {
    console.log(id+"_______________id");
    this.router.navigate(['/rolledit',id]);
   
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

                let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroup/delete/'+id;
          this.apiService.create(url, {}).subscribe( lists => {
            console.log('---success delete-----');
            this.router.navigate(['/groupadd']);
          },error => {
            console.log('---errror---')
          })
      }
    })
  }

  navigateadd()
{
  this.router.navigate(['/groupinform']);
}

}
