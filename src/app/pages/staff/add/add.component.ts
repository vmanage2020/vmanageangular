import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.services';
import { StaffService } from '../staff.service';
import { CommonService } from '../../../shared/common.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  staffForm: FormGroup;
  duplicate_qualification: FormArray;
  duplicate_experience: FormArray;

  loader: boolean = false;

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
    private staffService: StaffService,
    private commonService: CommonService,
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

    let con = this.staffService.selectedstaffId.getValue()
    //console.log('----con-----'+ this.staffService.selectedstaffId.getValue() )
    if (con != '')
    {
      this.editStaff(con)
      this.staffService.selectedstaffId.next('')
    }

    this.addqualification();
    this.addexperience();
    this.masterData();

  }

  editStaff( id)
  {
    console.log('-----edit staff id-----', id)
    if( id != '')
    {

      this.commonService.loaderShowHide(true);
      this.loader = true;

      setTimeout(() => {
        
        let url='http://sms.akst.in/public/api/staff/'+id;
        this.restApiService.lists(url).subscribe( edit => {
          console.log('---edit data----', edit )

          if(edit.staff.stf_id_pk != '')
          {
            this.staffForm.patchValue({
              application_number      : edit.staff.stf_appl_no,
              application_date        : edit.staff.stf_dateofapply,
              staff_first_name        : edit.staff.stf_fname,
              staff_middle_name       : edit.staff.stf_mname,
              staff_last_name         : edit.staff.stf_lname,
              communication_address   : edit.staff.stf_comm_address,
              permanent_address       : edit.staff.stf_per_address,
              category_type           : edit.staff.stf_catg_code_fk,
              designation_type        : edit.staff.stf_desig_code,
              gender                  : edit.staff.stf_sex,
              marital_status          : edit.staff.staf_martial_status,
              mobile_number           : edit.staff.stf_com_phone,
              father_name             : edit.staff.stf_father_name,
              email                   : edit.staff.stf_email,
              phone                   : edit.staff.stf_per_phone,
              dateofbirth             : edit.staff.stf_date_of_birth,
              nativity                : edit.staff.stf_nativity,
              staff_type              : edit.staff.stf_staff_type,
              familiar_area           : edit.staff.stf_familiar_areas,
              staff_code              : edit.staff.stf_staff_code,
              passport_number         : edit.staff.stf_passportno,
              department              : edit.staff.stf_dept_code,
              blood_group             : edit.staff.stf_blood_grp,
              height                  : edit.staff.stf_height,
              weight                  : edit.staff.stf_weight,
              nationality             : edit.staff.stf_nationality_fk,
              religion                : edit.staff.stf_religion_fk,
              caste                   : edit.staff.stf_caste_fk,
              powerofsight            : edit.staff.stf_appl_no,
              community               : edit.staff.stf_Community_fk,
              driving_number          : edit.staff.stf_drivingno,
              speak                   : edit.staff.stf_speak,
              read                    : edit.staff.stf_read1,
              remarks                 : edit.staff.stf_remarks,
              write                   : edit.staff.stf_write,
              //staff_image             : edit.staff.stu_adm_stu_image,
              account_number          : edit.staff.stf_acc_no
            }); 

            this.commonService.loaderShowHide(false);
            this.loader = false;
          }
          

         

        });
      }, 100);
      
    }
  }

  masterData()
  {
    let Metaurl='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/master';
    this.restApiService.lists(Metaurl).subscribe( lists => {
      console.log('---lists----', lists)
      this.categoryType = [
        {id:1, name: 'category1'}
      ];
      this.designationType = [
        {id:1, name: 'designation1'}
      ];
      this.staffType = [
        {id:1, name:'staff1'}
      ];
      this.departmentItem = [
        {id:1, name: 'department1'}
      ];
      this.degreeItem = [
        {id:1, name: 'degree1'}
      ];
      this.deptqualificationItem = [
        {id:1, name: 'qualification1'}
      ];
      this.gradeItem = [
        {id:1, name: 'grade1'}
      ];
      this.bloodGroup = lists.bloodgroups;
      this.nationalityItem = lists.languages;
      this.religionItem = lists.religions;
      this.communityItem = lists.communities;
    })
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
