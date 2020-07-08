import { Component, OnInit,ViewChild } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../../../shared/rest-api.services';

import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private apiService: RestApiService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
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
      this.apiService.lists('/academicboard').subscribe( lists => {
        this.Listitems = lists.academic_boards;       
        console.log( '-----lists------',lists )

         if( this.Listitems.length > 0)
        {

        this.data = this.Listitems;
        this.dtTrigger.next();

        } 
      })
    },100)
  }

  openCreateModal(): void {

    this.modalService.open(AddComponent, {ariaLabelledBy: 'modal-basic-title',size: 'xl'});

  }

}
