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

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  basicsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  horizontalsubmit: boolean;
  constructor(public formBuilder: FormBuilder) { 
    this.validationform= new FormGroup({
      "firstName": new FormControl(),
      'middleName': new FormControl(),
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
  
  cinfo()
  {
    let vformarray = this.validationform.get('certificateInfo') as FormArray;
    vformarray.push(
      new FormGroup({
      'certificateName':new FormControl(),
      'certificateDate': new FormControl(),
      'certificateNo' : new FormControl(),
      'certificateAttach' : new FormControl()
    }))
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Form Validation', path: '/', active: true }];
 
    this.validationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      middleName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
     
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
