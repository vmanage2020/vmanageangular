import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service'

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public loader: boolean      = false;

  boardForm: FormGroup;
  activityForm: FormGroup;
  languageForm: FormGroup;
  academicYearForm: FormGroup;
  groupnameForm: FormGroup;
  bloodgroupForm: FormGroup;
  standardForm: FormGroup;
  religionForm: FormGroup;
  communityForm: FormGroup;
  certificateForm: FormGroup;
  citizenForm: FormGroup;
  sectionForm: FormGroup;
  catagoryForm: FormGroup;
  designationForm: FormGroup;
  staffForm: FormGroup;
  departmentForm: FormGroup;
  degreeForm: FormGroup;
  gradeForm: FormGroup;
  statusForm: FormGroup;

  selectedId = '';

  submitbtnLabel = 'Save'

  paramName: any;
  PageLabel: any;

  constructor(
    private formBuilder: FormBuilder, 
    public activeModal: NgbActiveModal,
    private apiService: RestApiService, 
    private commonService: CommonService,
    private globalService: GlobalService,
    private route: ActivatedRoute, 
    private router: Router,
  ) { 

    this.paramName = this.router.url.split('/')[2]; 
    console.log('----add params------', this.paramName)

    if( this.paramName == 'academicboard')
    {
      this.createBoardForm();
    }else if( this.paramName == 'activity')
    {
      this.createActivityForm();
    }else if( this.paramName == 'language')
    {
      this.createLanguageForm();
    }else if( this.paramName == 'academicyear')
    {
      this.createAcademicYearForm();
    }else if( this.paramName == 'groupname')
    {
      this.createGroupForm();
    }else if( this.paramName == 'bloodgroup')
    {
      this.createBloodgroupForm();
    }else if( this.paramName == 'standard')
    {
      this.createStandardForm();
    }else if( this.paramName == 'religion')
    {
      this.createReligionForm();
    }else if( this.paramName == 'community')
    {
      this.createCommunityForm();
    }else if( this.paramName == 'certificatename')
    {
      this.createCertificateForm();
    }else if( this.paramName == 'citizen')
    {
      this.createCitizenForm();
    }else if( this.paramName == 'section')
    {
      this.createSectionForm();
    }
    /* staff details */
    else if( this.paramName == 'catagorytype')
    {
      this.createcatagoryForm();
    }
    else if( this.paramName == 'designationtype')
    {
      this.createdesingationForm();
    }
    else if( this.paramName == 'stafftype')
    {
      this.createstafftypeForm();
    }
    else if( this.paramName == 'department')
    {
      this.createdepartmentForm();
    }
    else if( this.paramName == 'degree')
    {
      this.createdegreeForm();
    }
    else if( this.paramName == 'grade')
    {
      this.creategradeForm();
    }
    else if( this.paramName == 'status')
    {
      this.createstatusForm();
    }
    
  }

  createBoardForm() {
    this.boardForm = this.formBuilder.group({
      board_cor_name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }

  createActivityForm()
  {
    this.activityForm = this.formBuilder.group({
      Activity: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }

  createLanguageForm()
  {
    this.languageForm = this.formBuilder.group({
      Language: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createAcademicYearForm()
  {
    this.academicYearForm = this.formBuilder.group({
      ayd_start_year: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createGroupForm()
  {
    this.groupnameForm = this.formBuilder.group({
      brd_grp_name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createBloodgroupForm()
  {
    this.bloodgroupForm = this.formBuilder.group({
      bld_des: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createStandardForm()
  {
    this.standardForm = this.formBuilder.group({
      cst_name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createReligionForm()
  {
    this.religionForm = this.formBuilder.group({
      rel_des: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createCommunityForm()
  {
    this.communityForm = this.formBuilder.group({
      com_des: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createCertificateForm()
  {
    this.certificateForm = this.formBuilder.group({
      crt_ms_name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createCitizenForm()
  {
    this.citizenForm = this.formBuilder.group({
      Citizens: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]]
    });
  }
  createSectionForm()
  {
    this.sectionForm = this.formBuilder.group({
      sec_des: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  
  /* staff details */

  createcatagoryForm()
  {
    this.catagoryForm = this.formBuilder.group({
      sct_desc: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  createdesingationForm()
  {
    this.designationForm = this.formBuilder.group({
      dsg_desc: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  createstafftypeForm()
  {
    this.staffForm = this.formBuilder.group({
      stf_tye_des: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  createdepartmentForm()
  {
    this.departmentForm = this.formBuilder.group({
      dpt_name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  createdegreeForm()
  {
    this.degreeForm = this.formBuilder.group({
      sec_des: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  creategradeForm()
  {
    this.gradeForm = this.formBuilder.group({
      sec_des: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }
  createstatusForm()
  {
    this.statusForm = this.formBuilder.group({
      sec_des: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
  }



  ngOnInit(): void {

    if( this.paramName !='')
    {
      this.PageLabel = ((this.paramName == 'academicboard') ? 'Academic Board':
      ((this.paramName == 'activity') ? 'Activity': 
      ((this.paramName == 'language') ? 'Language':
      ((this.paramName == 'groupname') ? 'Elective Group':
      ((this.paramName == 'bloodgroup') ? 'Blood Group':
      ((this.paramName == 'religion') ? 'Religion':
      ((this.paramName == 'community') ? 'Race/Community':
      ((this.paramName == 'certificatename') ? 'Certificate':
      ((this.paramName == 'citizen') ? 'Citizen':
      ((this.paramName == 'section') ? 'section':
      ((this.paramName == 'standard') ? 'Grade/Standard':
      ((this.paramName == 'academicyear') ? 'Academic Year': 
      ((this.paramName == 'catagorytype') ? 'Category Type':
      ((this.paramName == 'designationtype') ? 'Designation Type':
      ((this.paramName == 'stafftype') ? 'Staff Type':
      ((this.paramName == 'department') ? 'Department':
      ((this.paramName == 'degree') ? 'academicyear':
      ((this.paramName == 'grade') ? 'academicyear':
      ((this.paramName == 'status') ? 'academicyear': ''))))))))))))))))))); 
    }

    let con = this.globalService.selectedglobalId.getValue()
    //console.log('----con-----'+ con)
    if (con != '')
    {
      this.submitbtnLabel = 'Update'
      this.selectedglobalDataId(con)
      this.globalService.selectedglobalId.next('')
    }


  }

  selectedglobalDataId(id)
  {
    console.log('---edit id----', id)
    this.selectedId = id;

    if( this.paramName == 'academicboard')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicboard/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.academic_boards);
        this.boardForm.patchValue({
          board_cor_name        : selectedData.academic_boards[0].board_cor_name,
        });
      })
    }else if( this.paramName == 'activity')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/activity/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.activityForm.patchValue({
          Activity        : selectedData.activities[0].Activity,
        });
      })
    }else if( this.paramName == 'language')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.languageForm.patchValue({
          Language        : selectedData.languages[0].Language,
        });
      })
    }else if( this.paramName == 'academicyear')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicyear/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.academicYearForm.patchValue({
          ayd_start_year        : selectedData.academicyears[0].ayd_start_year,
        });
      })
    }else if( this.paramName == 'groupname')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/groupname/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.groupnameForm.patchValue({
          brd_grp_name        : selectedData.groupnames[0].brd_grp_name,
        });
      })
    }else if( this.paramName == 'bloodgroup')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/bloodgroup/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.bloodgroupForm.patchValue({
          bld_des        : selectedData.bloodgroups[0].bld_des,
        });
      })
    }else if( this.paramName == 'standard')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/standard/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.standardForm.patchValue({
          cst_name        : selectedData.standards[0].cst_name,
        });
      })
    }else if( this.paramName == 'religion')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/religion/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.religionForm.patchValue({
          rel_des        : selectedData.religions[0].rel_des,
        });
      })
    }else if( this.paramName == 'community')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/community/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.communityForm.patchValue({
          com_des        : selectedData.communities[0].com_des,
        });
      })
    }else if( this.paramName == 'certificatename')
    { 
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/certificatename/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.certificateForm.patchValue({
          crt_ms_name        : selectedData.certificatenames[0].crt_ms_name,
        });
      })
    }else if( this.paramName == 'citizen')
    {
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/citizen/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData);
        this.citizenForm.patchValue({
          Citizens        : selectedData.citizens[0].Citizens,
        });
      })
    }else if( this.paramName == 'section')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/section/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.sectionForm.patchValue({
          sec_des        : selectedData.sections[0].sec_des,
        });
      })
    }
    /* Staff Details */
    else if( this.paramName == 'catagorytype')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/catagorytype/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.catagoryForm.patchValue({
          sct_desc        : selectedData.catagorytypes[0].sct_desc,
        });
      })
    }
    else if( this.paramName == 'designationtype')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/designationtype/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.designationForm.patchValue({
          dsg_desc        : selectedData.designationtypes[0].dsg_desc,
        });
      })
    }
    else if( this.paramName == 'stafftype')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/stafftype/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.staffForm.patchValue({
          stf_tye_des        : selectedData.stafftypes[0].stf_tye_des,
        });
      })
    }
    else if( this.paramName == 'department')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/department/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.departmentForm.patchValue({
          dpt_name        : selectedData.departments[0].dpt_name,
        });
      })
    }
    else if( this.paramName == 'degree')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/degree/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.sectionForm.patchValue({
          sec_des        : selectedData.sections[0].sec_des,
        });
      })
    }
    else if( this.paramName == 'grade')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/grade/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.sectionForm.patchValue({
          sec_des        : selectedData.sections[0].sec_des,
        });
      })
    }
    else if( this.paramName == 'status')
    {

      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/status/'+this.selectedId;

      this.apiService.lists(url).subscribe((selectedData:any) => {
        console.log('----selectedData----', selectedData.data);
        this.sectionForm.patchValue({
          sec_des        : selectedData.sections[0].sec_des,
        });
      })
    }
  }

  closePopup()
  {
    console.log('---close popup----')
    this.activeModal.close()
  }

  formSubmit()
  {

    if( this.paramName == 'academicboard')
    {
      console.log('-----form value---'); console.log( this.boardForm.value )

        var board_cor_name = ((this.boardForm.value.board_cor_name != null) ? this.boardForm.value.board_cor_name : '')

        if( board_cor_name != '' && this.selectedId == '')
        {
          var insertdata = {board_cor_name: board_cor_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicboard/add';

          this.apiService.create(url, insertdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Academic Board created successfully']);
            this.router.navigate(['/global/academicboard/list']);
            this.activeModal.close(this.boardForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Academic Board failed. Please try again'])
          })
        }else if( board_cor_name != '' && this.selectedId != '')
        {
          var updatedata = {board_cor_name: board_cor_name}

            this.loader = true;
            let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicboard/update/'+this.selectedId;
            this.apiService.create(url, updatedata).subscribe((lang:any) => {
              console.log('----lang----', lang)
              this.commonService.changeMessage(['success', 'Academic Board updated successfully']);              
              this.router.navigate(['/global/academicboard/list']);
              this.activeModal.close(this.boardForm.value);
              this.loader = false;
            },error => {
              console.log('----update error---');console.log( error )
              this.commonService.changeMessage(['failure', 'Academic Board updation failed. Please try again'])
            })
        }
    }else if( this.paramName == 'activity')
    {
      console.log('-----form value---'); console.log( this.activityForm.value )

        var Activity = ((this.activityForm.value.Activity != null) ? this.activityForm.value.Activity : '')

        if( Activity != '' && this.selectedId == '')
        {
          var insertactivitydata = {Activity: Activity}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/activity/add';

          this.apiService.create(url, insertactivitydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Activity created successfully']);
            this.router.navigate(['/global/activity/list']);
            this.activeModal.close(this.activityForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Activity failed. Please try again'])
          })
        }else if( Activity != '' && this.selectedId != '')
        {
          var updateactivitydata = {Activity: Activity}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/activity/update/'+this.selectedId;

          this.apiService.create(url, updateactivitydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Activity updated successfully']);
            this.router.navigate(['/global/activity/list']);
            this.activeModal.close(this.activityForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Activity failed. Please try again'])
          })
        }
    }else if( this.paramName == 'language')
    {
      console.log('-----form value---'); console.log( this.languageForm.value )

        var Language = ((this.languageForm.value.Language != null) ? this.languageForm.value.Language : '')

        if( Language != '' && this.selectedId == '')
        {
          var insertlanguagedata = {Language: Language}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/add';

          this.apiService.create(url, insertlanguagedata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Language created successfully']);
            this.router.navigate(['/global/language/list']);
            this.activeModal.close(this.languageForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Language failed. Please try again'])
          })
        }else if( Language != '' && this.selectedId != '')
        {
          var updatelanguagedata = {Language: Language}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/update/'+this.selectedId;

          this.apiService.create(url, updatelanguagedata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Language updated successfully']);
            this.router.navigate(['/global/language/list']);
            this.activeModal.close(this.languageForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Language failed. Please try again'])
          })
        }
    }else if( this.paramName == 'academicyear')
    {
      console.log('-----form value---'); console.log( this.academicYearForm.value )

        var ayd_start_year = ((this.academicYearForm.value.ayd_start_year != null) ? this.academicYearForm.value.ayd_start_year : '')

        if( ayd_start_year != '' && this.selectedId == '')
        {
          var insertyeardata = {ayd_start_year: ayd_start_year}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicyear/add';

          this.apiService.create(url, insertyeardata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Academic Year created successfully']);
            this.router.navigate(['/global/academicyear/list']);
            this.activeModal.close(this.academicYearForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Academic Year failed. Please try again'])
          })
        }else if( ayd_start_year != '' && this.selectedId != '')
        {
          var updateyeardata = {ayd_start_year: ayd_start_year}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/academicyear/update/'+this.selectedId;

          this.apiService.create(url, updateyeardata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Academic Year updated successfully']);
            this.router.navigate(['/global/academicyear/list']);
            this.activeModal.close(this.academicYearForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Academic Year failed. Please try again'])
          })
        }
    }else if( this.paramName == 'groupname')
    {
      console.log('-----form value---'); console.log( this.groupnameForm.value )

        var brd_grp_name = ((this.groupnameForm.value.brd_grp_name != null) ? this.groupnameForm.value.brd_grp_name : '')

        if( brd_grp_name != '' && this.selectedId == '')
        {
          var insertboardgroupdata = {brd_grp_name: brd_grp_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/groupname/add';

          this.apiService.create(url, insertboardgroupdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Academic Group created successfully']);
            this.router.navigate(['/global/groupname/list']);
            this.activeModal.close(this.groupnameForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Academic Group failed. Please try again'])
          })
        }else if( brd_grp_name != '' && this.selectedId != '')
        {
          var updateboardgroupdata = {brd_grp_name: brd_grp_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/groupname/update/'+this.selectedId;

          this.apiService.create(url, updateboardgroupdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Academic Group updated successfully']);
            this.router.navigate(['/global/groupname/list']);
            this.activeModal.close(this.groupnameForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Academic Group failed. Please try again'])
          })
        }
    }else if( this.paramName == 'standard')
    {
      console.log('-----form value---'); console.log( this.standardForm.value )

        var cst_name = ((this.standardForm.value.cst_name != null) ? this.standardForm.value.cst_name : '')

        if( cst_name != '' && this.selectedId == '')
        {
          var insertstandarddata = {cst_name: cst_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/standard/add';

          this.apiService.create(url, insertstandarddata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Standard created successfully']);
            this.router.navigate(['/global/standard/list']);
            this.activeModal.close(this.standardForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Standard failed. Please try again'])
          })
        }else if( cst_name != '' && this.selectedId != '')
        {
          var updatestandarddata = {cst_name: cst_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/standard/update/'+this.selectedId;

          this.apiService.create(url, updatestandarddata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Standard update successfully']);
            this.router.navigate(['/global/standard/list']);
            this.activeModal.close(this.standardForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Standard failed. Please try again'])
          })
        }
    }else if( this.paramName == 'bloodgroup')
    {
      console.log('-----form value---'); console.log( this.bloodgroupForm.value )

        var bld_des = ((this.bloodgroupForm.value.bld_des != null) ? this.bloodgroupForm.value.bld_des : '')

        if( bld_des != '' && this.selectedId == '')
        {
          var insertbloodgroupdata = {bld_des: bld_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/bloodgroup/add';

          this.apiService.create(url, insertbloodgroupdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Bloodgroup created successfully']);
            this.router.navigate(['/global/bloodgroup/list']);
            this.activeModal.close(this.bloodgroupForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Bloodgroup failed. Please try again'])
          })
        }else if( bld_des != '' && this.selectedId != '')
        {
          var updatebloodgroupdata = {bld_des: bld_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/bloodgroup/update/'+this.selectedId;

          this.apiService.create(url, updatebloodgroupdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Bloodgroup updated successfully']);
            this.router.navigate(['/global/bloodgroup/list']);
            this.activeModal.close(this.bloodgroupForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Bloodgroup failed. Please try again'])
          })
        }
    }else if( this.paramName == 'religion')
    {
      console.log('-----form value---'); console.log( this.religionForm.value )

        var rel_des = ((this.religionForm.value.rel_des != null) ? this.religionForm.value.rel_des : '')

        if( rel_des != '' && this.selectedId == '')
        {
          var insertreligiondata = {rel_des: rel_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/religion/add';

          this.apiService.create(url, insertreligiondata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Religion created successfully']);
            this.router.navigate(['/global/religion/list']);
            this.activeModal.close(this.religionForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Religion failed. Please try again'])
          })
        }else if( rel_des != '' && this.selectedId != '')
        {
          var updatereligiondata = {rel_des: rel_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/religion/update/'+this.selectedId;

          this.apiService.create(url, updatereligiondata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Religion update successfully']);
            this.router.navigate(['/global/religion/list']);
            this.activeModal.close(this.religionForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Religion failed. Please try again'])
          })
        }
    }else if( this.paramName == 'community')
    {
      console.log('-----form value---'); console.log( this.communityForm.value )

        var com_des = ((this.communityForm.value.com_des != null) ? this.communityForm.value.com_des : '')

        if( com_des != '' && this.selectedId == '')
        {
          var insertcommunitydata = {com_des: com_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/community/add';

          this.apiService.create(url, insertcommunitydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Community created successfully']);
            this.router.navigate(['/global/community/list']);
            this.activeModal.close(this.communityForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Community failed. Please try again'])
          })
        }else if( com_des != '' && this.selectedId != '')
        {
          var updatecommunitydata = {com_des: com_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/community/update/'+this.selectedId;

          this.apiService.create(url, updatecommunitydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Community updated successfully']);
            this.router.navigate(['/global/community/list']);
            this.activeModal.close(this.communityForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Community failed. Please try again'])
          })
        }
    }else if( this.paramName == 'citizen')
    {
      console.log('-----form value---'); console.log( this.citizenForm.value )

        var Citizens = ((this.citizenForm.value.Citizens != null) ? this.citizenForm.value.Citizens : '')

        if( Citizens != '' && this.selectedId == '')
        {
          var insertcitizendata = {Citizens: Citizens}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/citizen/add';

          this.apiService.create(url, insertcitizendata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Citizen created successfully']);
            this.router.navigate(['/global/citizen/list']);
            this.activeModal.close(this.citizenForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Citizen failed. Please try again'])
          })
        }else if( Citizens != '' && this.selectedId != '')
        {
          var updatecitizendata = {Citizens: Citizens}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/citizen/update/'+this.selectedId;

          this.apiService.create(url, updatecitizendata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Citizen updated successfully']);
            this.router.navigate(['/global/citizen/list']);
            this.activeModal.close(this.citizenForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Citizen failed. Please try again'])
          })
        }
    }else if( this.paramName == 'certificatename')
    {
      console.log('-----form value---'); console.log( this.certificateForm.value )

        var crt_ms_name = ((this.certificateForm.value.crt_ms_name != null) ? this.certificateForm.value.crt_ms_name : '')

        if( crt_ms_name != '' && this.selectedId == '')
        {
          var insertcertifictaedata = {crt_ms_name: crt_ms_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/certificatename/add';

          this.apiService.create(url, insertcertifictaedata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Certificate created successfully']);
            this.router.navigate(['/global/certificatename/list']);
            this.activeModal.close(this.certificateForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Certificate failed. Please try again'])
          })
        }else if( crt_ms_name != '' && this.selectedId != '')
        {
          var updatecertifictaedata = {crt_ms_name: crt_ms_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/certificatename/update/'+this.selectedId;

          this.apiService.create(url, updatecertifictaedata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Certificate updated successfully']);
            this.router.navigate(['/global/certificatename/list']);
            this.activeModal.close(this.certificateForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Certificate failed. Please try again'])
          })
        }
    }else if( this.paramName == 'section')
    {
      console.log('-----form value---'); console.log( this.sectionForm.value )

        var sec_des = ((this.sectionForm.value.sec_des != null) ? this.sectionForm.value.sec_des : '')

        if( sec_des != '' && this.selectedId == '')
        {
          var insertsectiondata = {sec_des: sec_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/section/add';

          this.apiService.create(url, insertsectiondata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Section created successfully']);
            this.router.navigate(['/global/section/list']);
            this.activeModal.close(this.sectionForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Section failed. Please try again'])
          })
        }else if( sec_des != '' && this.selectedId != '')
        {
          var updatesectiondata = {sec_des: sec_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/section/update/'+this.selectedId;

          this.apiService.create(url, updatesectiondata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Section updated successfully']);
            this.router.navigate(['/global/section/list']);
            this.activeModal.close(this.sectionForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Section failed. Please try again'])
          })
        }
    }else if( this.paramName == 'catagorytype')
    {
      console.log('-----form value---'); console.log( this.catagoryForm.value )

        var sct_desc = ((this.catagoryForm.value.sct_desc != null) ? this.catagoryForm.value.sct_desc : '')

        if( sct_desc != '' && this.selectedId == '')
        {
          var insertcatagorydata = {sct_desc: sct_desc}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/catagorytype/add';

          this.apiService.create(url, insertcatagorydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Catagorytype created successfully']);
            this.router.navigate(['/global/catagorytype/list']);
            this.activeModal.close(this.catagoryForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Catagorytype failed. Please try again'])
          })
        }else if( sct_desc != '' && this.selectedId != '')
        {
          var updatecatagorydata = {sct_desc: sct_desc}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/catagorytype/update/'+this.selectedId;

          this.apiService.create(url, updatecatagorydata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Catagorytype updated successfully']);
            this.router.navigate(['/global/catagorytype/list']);
            this.activeModal.close(this.catagoryForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Catagorytype failed. Please try again'])
          })
        }
    }else if( this.paramName == 'designationtype')
    {
      console.log('-----form value---'); console.log( this.designationForm.value )

        var dsg_desc = ((this.designationForm.value.dsg_desc != null) ? this.designationForm.value.dsg_desc : '')

        if( dsg_desc != '' && this.selectedId == '')
        {
          var insertdesignationdata = {dsg_desc: dsg_desc}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/designationtype/add';

          this.apiService.create(url, insertdesignationdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Designationtype created successfully']);
            this.router.navigate(['/global/designationtype/list']);
            this.activeModal.close(this.designationForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Designationtype failed. Please try again'])
          })
        }else if( dsg_desc != '' && this.selectedId != '')
        {
          var updatedesingationdata = {dsg_desc: dsg_desc}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/designationtype/update/'+this.selectedId;

          this.apiService.create(url, updatedesingationdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Designationtype updated successfully']);
            this.router.navigate(['/global/designationtype/list']);
            this.activeModal.close(this.designationForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Designationtype failed. Please try again'])
          })
        }
    }else if( this.paramName == 'stafftype')
    {
      console.log('-----form value---'); console.log( this.staffForm.value )

        var stf_tye_des = ((this.staffForm.value.stf_tye_des != null) ? this.staffForm.value.stf_tye_des : '')

        if( stf_tye_des != '' && this.selectedId == '')
        {
          var insertstaffdata = {stf_tye_des: stf_tye_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/stafftype/add';

          this.apiService.create(url, insertstaffdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Staff created successfully']);
            this.router.navigate(['/global/stafftype/list']);
            this.activeModal.close(this.staffForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Staff failed. Please try again'])
          })
        }else if( stf_tye_des != '' && this.selectedId != '')
        {
          var updatestaffdata = {stf_tye_des: stf_tye_des}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/stafftype/update/'+this.selectedId;

          this.apiService.create(url, updatestaffdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Staff updated successfully']);
            this.router.navigate(['/global/stafftype/list']);
            this.activeModal.close(this.staffForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Staff failed. Please try again'])
          })
        }
    }else if( this.paramName == 'department')
    {
      console.log('-----form value---'); console.log( this.departmentForm.value )

        var dpt_name = ((this.departmentForm.value.dpt_name != null) ? this.departmentForm.value.dpt_name : '')

        if( dpt_name != '' && this.selectedId == '')
        {
          var insertdepartmentdata = {dpt_name: dpt_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/department/add';

          this.apiService.create(url, insertdepartmentdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Department created successfully']);
            this.router.navigate(['/global/department/list']);
            this.activeModal.close(this.departmentForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Department failed. Please try again'])
          })
        }else if( dpt_name != '' && this.selectedId != '')
        {
          var updatedepartmentdata = {dpt_name: dpt_name}

          this.loader = true;
          let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/department/update/'+this.selectedId;

          this.apiService.create(url, updatedepartmentdata).subscribe((data:any) => {

            console.log('----data----', data)
            this.commonService.changeMessage(['success', 'Department updated successfully']);
            this.router.navigate(['/global/department/list']);
            this.activeModal.close(this.departmentForm.value);
            this.loader = false;
          },error => {
            console.log('----create error---');console.log( error )
            this.commonService.changeMessage(['failure', 'Department failed. Please try again'])
          })
        }
    }

    
  }

}
