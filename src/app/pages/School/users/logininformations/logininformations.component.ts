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
        users_name: ['', Validators.required],
        users_pwd: ['', Validators.required]
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
      "grps_id_fk": this.form.col_code_fk.value,
      "users_name":this.form.users_name.value,
      "users_pwd":this.form.users_pwd.value
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
