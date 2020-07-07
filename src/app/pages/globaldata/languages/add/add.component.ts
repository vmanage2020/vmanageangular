import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service'

import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  languageForm: FormGroup;
  public loader: boolean      = false;
  alphanumeric                = '^[A-Za-z0-9_ ]+$'
  selectedLangId = '';

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: RestApiService, 
    private commonService: CommonService,
    private route: ActivatedRoute, 
    private router: Router,
    private languageServcie: LanguagesService
  ) { 

    this.createForm();
  }


  createForm() {
    this.languageForm = this.formBuilder.group({
      Language: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255), Validators.pattern(this.alphanumeric)]]
    });
  }

  ngOnInit(): void {

    let langVal = this.languageServcie.selectedLanguageId.getValue()
    if (langVal != '') 
    {
      this.selectedLangId = langVal;
      this.selectedLanguageId(langVal)
      this.languageServcie.selectedLanguageId.next('')
    }

  }

  selectedLanguageId( id )
  {
    console.log('----edit id----', id )

    this.apiService.lists('/language/'+id).subscribe((language:any) => {
      console.log('---language----', language)
      if( language.languages.length > 0)
      {
        console.log('----language data----', language.languages[0].Language)
        this.languageForm.patchValue({
          Language: language.languages[0].Language
        });
      }      

    });
  }

  formSubmit()
  {
    console.log('-----form value---'); console.log( this.languageForm.value )
    var languageName = ((this.languageForm.value.Language != null) ? this.languageForm.value.Language : '')
    if( languageName != '' && this.selectedLangId != '')
    {
      var langData = {"Language": languageName}
      this.loader = true;
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/update/'+this.selectedLangId;
      this.apiService.create(url, langData).subscribe((lang:any) => {
        console.log('----lang----', lang)
        this.commonService.changeMessage(['success', 'Language updated successfully']);
        this.loader = false;
        this.router.navigate(['/global/language/list']);
      },error => {
        console.log('----update error---');console.log( error )
        this.commonService.changeMessage(['failure', 'Language updation failed. Please try again'])
      })
    }
    else if( languageName != '' && this.selectedLangId == '')
    {
      var langData = {"Language": languageName}
      this.loader = true;
      let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/language/add';

      this.apiService.create(url, langData).subscribe((lang:any) => {
        console.log('----lang----', lang)
        this.commonService.changeMessage(['success', 'Language created successfully']);
        this.loader = false;
        this.router.navigate(['/global/language/list']);
      },error => {
        console.log('----create error---');console.log( error )
        this.commonService.changeMessage(['failure', 'Language creation failed. Please try again'])
      })
    }

  }

}
