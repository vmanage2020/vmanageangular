import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';



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

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  basicsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  horizontalsubmit: boolean;
  constructor(public formBuilder: FormBuilder) { 
    this.validationform= new FormGroup({
      'sName': new FormControl(),
      'appno': new FormControl("5ef1d8778dd65"),
      'dateapp': new FormControl("23-06-2020"),
      "firstName": new FormControl(),
      'middleName': new FormControl(),
      'lastName' : new FormControl(),
      //'entrym': new FormControl("Regular"),
      'Batchyear': new FormControl(),
      'boardname': new FormControl(),
      
      'certificateInfo': new FormArray([
       new FormGroup({
         'certificateName':new FormControl(),
         'certificateDate': new FormControl(),
         'certificateNo' : new FormControl(),
         'certificateAttach' : new FormControl()
       })
     ])
    })
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
     sName: ['', [Validators.required]],
     appno: ['5ef1d8778dd65', [Validators.pattern('[a-zA-Z0-9]+')]],
      dateapp: ['23-06-2020', [Validators.pattern('[a-zA-Z0-9]+')]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      middleName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     // entrym: ['Regular', [Validators.required]],
      Batchyear: ['', [Validators.required]],
      boardname: ['', [Validators.required]],
      certificateName:['', [Validators.required]],
      certificateDate:['', [Validators.required]],
      certificateNo:['', [Validators.required]],
      certificateAttach:['', [Validators.required]]
     
     
    });

    this.submit = false;
    this.formsubmit = false;

  }
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
    console.log(this.submit);
  }

}
