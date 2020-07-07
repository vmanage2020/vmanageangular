import { Component, OnInit, ViewChild } from '@angular/core';

import { RestApiService } from '../../../../shared/rest-api.services';

import { ActivatedRoute, Router } from '@angular/router';

import { LanguagesService } from '../languages.service';
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
  LangListitems: any[] = [];
  data: any;
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private apiurl: RestApiService, 
    private languageServcie: LanguagesService,
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }
  ngOnInit(): void {
    
    this.languageList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }; 
  }

  editLanguage(id)
  {
    console.log('----id---', id)
    this.languageServcie.editLanguageData(id)
    this.router.navigate(['/global/language/add'])
  }

  deleteLanguage(id)
  {
    console.log('-----id----', id)
    let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/delete/'+id;
    this.apiurl.remove(url).subscribe( lists => {
      console.log('---success delete-----')
    },error => {
      console.log('---errror---')
    })
  }

  languageList()
  {
    setTimeout(() => {
      this.apiurl.lists('/language').subscribe( lists => {
        this.LangListitems = lists.languages;       
        console.log( '-----lists------',lists )

         if( this.LangListitems.length > 0)
        {

        this.data = this.LangListitems;
        this.dtTrigger.next();

        } 
      })
    },100)
  }

}
