import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  //userForm:FormGroup;
  breadCrumbItems: Array<{}>;
  validationform: FormGroup; // bootstrap validation form
  // certificateInfo:FormArray;
  public duplicateCertifcateColumns: FormArray;

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  basicsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  horizontalsubmit: boolean;

  dropdownArray = [
    [ "Vidyalakshmi school", "Vidyalakshmi school2", "Vidyalakshmi school3", "schoolVidyalakshmi school4", "Vidyalakshmi school5"],
    ["5dfdfldsfl24d55"],
    ["27-06-2020"],
    [ "2020", "2021", "2019", "2023", "2024"],
    [ "metric ", "cbse", "state", "icse", "others"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "X", "XI", "XII", "XIII", "XIV"],
    [ "General", "General", "General", "General", "General"],
    ["English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "previoussc", "previoussc2", "previoussc3", "previoussc4", "previoussc5"],
    
  ]
  constructor(public formBuilder: FormBuilder, private http:HttpClient) {

  }

  /* cinfo()
   {
     let vformarray = this.validationform.get('certificateInfo') as FormArray;
     vformarray.push(
       new FormGroup({
       'certificateName':new FormControl(),
       'certificateDate': new FormControl(),
       'certificateNo' : new FormControl(),
       'certificateAttach' : new FormControl()
     }))
   }*/
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Form Validation', path: '/', active: true }];

    this.validationform = this.formBuilder.group({
      col_code_fk: ['', [Validators.required]],
      stu_prf_app_No: ['5ef1d8778dd65', [Validators.pattern('[a-zA-Z0-9]+')]],
      stu_prf_app_date: ['23-06-2020', [Validators.pattern('[a-zA-Z0-9]+')]],
      stu_prf_stud_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      stu_stud_mname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      stu_stud_lname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      bayear: ['', [Validators.required]],
      boardname: ['', [Validators.required]],
      medname: ['', [Validators.required]],
      stand: ['', [Validators.required]],
      groupn: ['', [Validators.required]],
      secondlang: ['', [Validators.required]],
      motherton: ['', [Validators.required]],
      previousschoolinfo: this.formBuilder.array([
        
      ]),
      

      certificateColumns: this.formBuilder.array([]),
      //certificateName:['', [Validators.required]],
      //certificateDate:['', [Validators.required]],
      //certificateNo:['', [Validators.required]],
      //certificateAttach:['', [Validators.required]]


    });

    this.duplicateCertifcateColumns = this.validationform.get('certificateColumns') as FormArray;
    this.submit = false;
    this.formsubmit = false;
    this.addCertificateColumn();
  }
  get form() {
    return this.validationform.controls;
  }

  createCertificateColumnForm(): FormGroup {
    return this.formBuilder.group({
      certificateName: [null],
      certificateDate: [null],
      certificateNo: [null],
      certificateAttach: [null]
    })
  }

  addCertificateColumn() {
    this.duplicateCertifcateColumns.push(this.createCertificateColumnForm());
  }

  removeCertificateColumn(index) {
    this.duplicateCertifcateColumns.removeAt(index);
  }


  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
   
   /* if (this.validationform.invalid) {
      return;
    }*/
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.validationform.value));
    /*
 console.log( JSON.stringify(this.validationform.value));
     
     let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student'
    this.http.post<any>(url, this.validationform.value  ).subscribe(data => {
      console.log(data);
    })

    */

    let postData = {
      "col_code_fk": this.form.col_code_fk.value,
      "stu_prf_stud_name": this.form.stu_prf_stud_name.value,
        "stu_stud_mname": this.form.stu_stud_mname.value,
        "stu_stud_lname": "Alagirivimal",
        "stu_prf_dob": "0000-00-00",
        "stu_prf_sex": 0,
        "stu_prf_mar_status": 0,
        "stu_prf_roll_No": "",
        "stu_prf_app_No": "",
        "stu_prf_app_name": "",
        "stu_prf_app_date": "2014-02-04",
        "stu_prf_quota": 0,
        "stu_prf_current_Year": 0,
        "stu_prf_current_batch": 0,
        "stu_prf_lab_batch": 0,
        "stu_prf_current_Semester": 0,
        "stu_prf_seat_type_fk": 0,
        "stu_prf_reg_no": "",
        "stu_prf_degree_code": 0,
        "stu_prf_branch_Code": 0,
        "stu_prf_cardno": 0,
        "stu_prf_lib_id": 0,
        "stu_prf_jmonth": 0,
        "stu_prf_jyear": 0,
        "stu_prf_attempts": 0,
        "stu_prf_rejoin_status": 0,
        "stu_prf_fathers_name": "",
        "stu_prf_mothers_name": "",
        "stu_prf_guardian_name": "",
        "stu_prf_fathers_qual": "",
        "stu_prf_mothers_qual": "",
        "stu_prf_fathers_occup": "",
        "stu_prf_mothers_occup": "",
        "stu_prf_fathers_anninc": "",
        "stu_prf_mothers_anninc": "",
        "stu_prf_plc_of_livng": "",
        "stu_prf_plc_of_birth": "",
        "stu_prf_parents_handicap": 2,
        "stu_prf_parents_old_stu": 2,
        "stu_prf_co_curr": "",
        "stu_prf_mem_of_serv_org": "",
        "stu_prf_family_size": 0,
        "stu_prf_community_fk": 0,
        "stu_prf_caste_fk": 0,
        "stu_prf_religion_fk": 0,
        "stu_prf_mother_tongue_fk": 0,
        "stu_prf_citizen_fk": 0,
        "stu_prf_medium_ins_fk": 0,
        "stu_prf_bldgrp_fk": 0,
        "stu_prf_visualhandy": 2,
        "stu_prf_parent_email": "",
        "stu_prf_mobile_no": "",
        "stu_prf_stu_email": "",
        "stu_prf_remarks": "",
        "stu_adm_no": "",
        "stu_adm_date": "0000-00-00",
        "stu_adm_barcode": "",
        "stu_adm_referby": "",
        "stu_adm_tcno": "",
        "stu_adm_entry_mode": 1,
        "stu_adm_tcdate": "0000-00-00",
        "stu_adm_sections": 0,
        "stu_adm_debar_reason": "",
        "stu_adm_prev_colname": "",
        "stu_adm_app_no": "",
        "stu_adm_app_dt": "0000-00-00",
        "stu_adm_stu_image": "",
        "stu_adm_mode": 1,
        "stu_adm_status": 6,
        "stu_detained": 0,
        "stu_discontinue": 0,
        "stu_adm_fee": 0,
        "stu_adm_class": 0,
        "stu_prf_promotion_status": 0,
        "stu_group_id_fk": 0,
        "stu_adm_std": 0,
        "stu_prf_sec_lang": 0,
        "stu_prf_third_lang": 0,
        "stu_adm_fee_coll": 0,
        "stu_adm_refno": 0,
        "status": 0,
        "create_date": "2014-02-04 03:00:16",
        "create_by": 2,
        "edit_date": "0000-00-00 00:00:00",
        "edit_by": 0
    };


     console.log( postData);
     
     let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student'
    this.http.post<any>(url, postData  ).subscribe(data => {
      console.log(data);
    })

  }

}