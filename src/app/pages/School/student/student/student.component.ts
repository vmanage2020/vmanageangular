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
     console.log( JSON.stringify(this.validationform.value));
     let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student'
    this.http.post<any>(url, this.validationform.value  ).subscribe(data => {
      console.log(data);
    })
  }

}