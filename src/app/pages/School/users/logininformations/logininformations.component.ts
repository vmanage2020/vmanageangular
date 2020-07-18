import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../../../shared/rest-api.services';
import swal from 'sweetalert2';
/* import 'rxjs/add/operator/map'; */




@Component({
  selector: 'app-logininformations',
  templateUrl: './logininformations.component.html',
  styleUrls: ['./logininformations.component.scss']
})
export class LogininformationsComponent implements OnInit {
  useraddForm: FormGroup;
  submitted = false;
  rollitemsget:any=[];
  constructor( private apiService: RestApiService, private http: HttpClient,private formBuilder: FormBuilder, private route: ActivatedRoute,
   private router: Router) { }

  ngOnInit(): void {
    this.useraddForm = this.formBuilder.group({
        col_code_fk: ['', Validators.required],
        users_name: ['', Validators.required]
  });

  var roleget =  'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroups';
  this.apiService.lists(roleget).subscribe(lists => {
    this.rollitemsget=lists.data;
  });

  }

  get form() {
    return this.useraddForm.controls;
  }

  usersadd() {
    let addRoll ={
        "grps_desc": null,
        "col_code_fk": 1,
        "status": 0,
        "create_by": 1,
        "create_date": "2020-07-17 11:33:17",
        "edit_by": 0,
        "edit_date": "2020-07-17 11:33:17",
        "return": {
            "message": "Error on Insert"
        }
    }

    let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginuser';
    console.log(url);

   this.http.post<any>(url, addRoll  ).subscribe(
      data => {
        console.log(data);
       this.router.navigate(['/loginadd']);
      },
      error => {
         console.log(error);    
      }
   )


  }



}
