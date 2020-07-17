
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service'

@Component({
  selector: 'app-rolledit',
  templateUrl: './rolledit.component.html',
  styleUrls: ['./rolledit.component.scss']
})
export class RolleditComponent implements OnInit {
  rollEditform: FormGroup;
  editID:any;
  id1: string;
  url:any;
  rolledits:any=[];
  constructor(private formBuilder: FormBuilder,
    // private apiService: RestApiService,
    private apiService: RestApiService, 
    private commonService: CommonService,
    private http:HttpClient,
    private route: ActivatedRoute, 
    private router: Router) { 
      
      this.id1= this.route.snapshot.paramMap.get('id')
      this.url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroup/'+this.id1;
  ///console.log(this.url);
    this.http.get<any>(this.url).toPromise().then(data => {
      const dt = data;
      if(dt['data']){
        //console.log(dt['data']);
        this.rolledits=dt['data'];
        
      }

    })

   
      
    }

  ngOnInit(): void {
  
    this.rollEditform = this.formBuilder.group({
      grps_desc: ['', [Validators.required]]
    })
  }
  get form() {
    return this.rollEditform.controls;
  }

  EditRoll() {
    let postRoll = {
      "grps_desc": this.form.grps_desc.value,
      "col_code_fk": 1,
      "status": 0,
      "create_by": 1,
      "create_date": "2020-07-17 03:49:33",
      "edit_by": 0,
      "edit_date": "2020-07-17 03:49:33",
      "return": {
        "message": "Error on Insert"
      }
    }

    let url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroup/update/'+this.id1;
    console.log(url);

    this.http.post<any>(url, postRoll).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/groupadd']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
