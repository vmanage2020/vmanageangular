import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service'


@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss']
})
export class LoginviewComponent implements OnInit {
  usereditForm: FormGroup;
  submitted = false;
  id1: string;
  url: any;
  usereditget: any = [];
  rollget: any = [];
  constructor(private commonService: CommonService, private apiService: RestApiService, private http: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) {

    this.id1 = this.route.snapshot.paramMap.get('id')
    this.url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginuser/' + this.id1;
    ///console.log(this.url);
    this.http.get<any>(this.url).toPromise().then(data => {
      const dt = data;
      if (dt['data']) {
        //console.log(dt['data']);
        this.rollget = dt['data'];

      }
    })
  }

  ngOnInit(): void {
    this.usereditForm = this.formBuilder.group({

      users_name: ['', Validators.required],
      users_pwd: ['', Validators.required]
    });

    var roleget = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/usergroups';
    this.apiService.lists(roleget).subscribe(lists => {
      this.usereditget = lists.data;
    });

  }

  get form() {
    return this.usereditForm.controls;
  }

  usersedit() {
    let addRoll = {
      "grps_id_fk":  this.rollget[this.id1],
      "users_name": this.form.users_name.value,
      "users_pwd": this.form.users_pwd.value
    }

    let url = 'https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginuser/update/'+ this.id1;
    console.log(url);

    this.http.post<any>(url, addRoll).subscribe(
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