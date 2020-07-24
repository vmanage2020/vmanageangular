import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  staffForm: FormGroup;
  duplicate_qualification: FormArray;
  duplicate_experience: FormArray;

  categoryType: any[]           = [];
  designationType: any[]        = [];
  staffType: any[]              = [];
  departmentItem: any[]         = [];
  bloodGroup: any[]             = [];
  nationalityItem: any[]        = [];
  religionItem: any[]           = [];
  casteItem: any[]              = [];
  communityItem: any[]          = [];
  degreeItem: any[]             = [];
  deptqualificationItem: any[]  = [];
  gradeItem: any[]              = [];


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
     private restApiService: RestApiService) {
        this.createForm();
      }

      createForm()
      {
        this.staffForm = this.formBuilder.group({
          application_number      : [null,Validators.required],
          application_date        : [null,Validators.required],
          staff_first_name        : [null,Validators.required],
          staff_middle_name       : [null],
          staff_last_name         : [null,Validators.required],
          communication_address   : [null,Validators.required],
          permanent_address       : [null],
          category_type           : [null,Validators.required],
          designation_type        : [null,Validators.required],
          gender                  : [null,Validators.required],
          marital_status          : [null,Validators.required],
          mobile_number           : [null,Validators.required],
          father_name             : [null,Validators.required],
          email                   : [null,Validators.required],
          phone                   : [null],
          dateofbirth             : [null,Validators.required],
          nativity                : [null],
          staff_type              : [null,Validators.required],
          familiar_area           : [null,Validators.required],
          staff_code              : [null],
          passport_number         : [null],
          department              : [null,Validators.required],
          blood_group             : [null],
          height                  : [null],
          weight                  : [null],
          nationality             : [null],
          religion                : [null],
          caste                   : [null],
          powerofsight            : [null],
          community               : [null],
          driving_number          : [null],
          speak                   : [null],
          read                    : [null],
          remarks                 : [null],
          write                   : [null],
          staff_image             : [null],
          account_number          : [null],
          qualification_info      : this.formBuilder.array([]),
          experience_info         : this.formBuilder.array([]),
        });

        this.duplicate_qualification       = this.staffForm.get('qualification_info') as FormArray;
        this.duplicate_experience          = this.staffForm.get('experience_info') as FormArray;

      }

      createqualificationForm(): FormGroup {
        return this.formBuilder.group({
          degree                  : [null,Validators.required],
          departmentqualification : [null,Validators.required],
          grade                   : [null,Validators.required],
          percentage              : [null,Validators.required],
          institution_name        : [null,Validators.required],
          yesrofpassing           : [null,Validators.required],
        })
      }
  
      addqualification()
      {
        this.duplicate_qualification.push(this.createqualificationForm());
      }
      removequalification(index)
      {
        this.duplicate_qualification.removeAt(index);
      }

      createexperienceForm(): FormGroup {
        return this.formBuilder.group({
          company_name            : [null,Validators.required],
          start_date              : [null,Validators.required],
          end_date                : [null,Validators.required],
          experience_year         : [null,Validators.required],
          experience_month        : [null,Validators.required],
        })
      }
  
      addexperience()
      {
        this.duplicate_experience.push(this.createexperienceForm());
      }
      removeexperience(index)
      {
        this.duplicate_experience.removeAt(index);
      }


  ngOnInit(): void {
    this.addqualification();
    this.addexperience();
  }

  onFileSelect(event:any)
  {

  }
  cancelForm()
  {
    this.router.navigate(['/staff/list']);
  }
  get f() {
    return this.staffForm.controls;
  }

  formSubmit()
  {
    console.log('-----form value---'); console.log( this.staffForm.value )
  }


}
