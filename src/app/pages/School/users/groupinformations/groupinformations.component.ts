import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'

/* import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service' */

@Component({
  selector: 'app-groupinformations',
  templateUrl: './groupinformations.component.html',
  styleUrls: ['./groupinformations.component.scss']
})

export class GroupinformationsComponent implements OnInit {
  rollvalidationform: FormGroup; // bootstrap validation form

  constructor(private formBuilder: FormBuilder,
   // private apiService: RestApiService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
   // private commonService: CommonService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.rollvalidationform = this.formBuilder.group({
      grps_desc: ['', [Validators.required]]
    })
  }
  get form() {
    return this.rollvalidationform.controls;
  }
  validRoll() {
    let postRoll ={
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

    let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroup';
    console.log(url);

   this.http.post<any>(url, postRoll  ).subscribe(
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


