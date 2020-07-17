import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from '../../../../shared/rest-api.services';
//import { GlobalService } from '../global.service';
import { ActivatedRoute, Router, Params, NavigationEnd, RouterState } from '@angular/router';
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
  Listitems: any;
  rollitems:any=[];
  paramName: any;
  data: any;
  eventdatas: any;
  size: any;
 checkdata:any=[];

  constructor(private apiService: RestApiService, private http: HttpClient, private srvCart: UserserviceService,
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
    var roleget =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroups';
    this.apiService.lists(roleget).subscribe(lists => {
      this.rollitems=lists.data;
      //this.checkdata=lists.data.grps_desc;
      //console.log(this.checkdata+"______________");
    });
//grps_desc
    var url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginusers';
    this.apiService.lists(url).subscribe(lists => {
      this.Listitems = lists.data;
      // console.log( '-----lists------',this.Listitems.grps_desc )
      if (this.Listitems != undefined && this.Listitems.length > 0) {
        this.data = this.Listitems;
        this.dtTrigger.next();
      }
    })

  }

  addusers()
{
  this.router.navigate(['/logininform']);
}



}

