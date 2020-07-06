import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


import { RestApiService } from '../../../../shared/rest-api.services';
import { CommonService } from '../../../../shared/common.service'

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss']
})
export class StudenteditComponent implements OnInit {

  public loader: boolean = false;

  submitted = false;
  appRandomNumber:any;

  mygrou=[1,2,3,4,5];
  SViewitems:any=[];
  SViewDoc:any=[];

  studentdocument: any[] = [];
  resourceID:any;
  url:any;
  dobValue:any;
  objectKeys = Object.keys;
  listOfFiles: any[] = [];


  //userForm:FormGroup;
  breadCrumbItems: Array<{}>;
  validationform: FormGroup; // bootstrap validation form
  // certificateInfo:FormArray;
  public duplicateCertifcateColumns: FormArray;
  uploadProfileImageForm: FormGroup;
  imagefilename:any;

  createCertificateOpt: boolean = false;

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  basicsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  horizontalsubmit: boolean;

  previousSchoolOpt: boolean = false;
  foreigndetailOpt: boolean = false;
  
  
  // Select2 Dropdown
  selectValue: string[];
 
  schoolSelect = true;
  yearSelect = true;
  boardSelect = true;
  mediumSelect = true;
  standardSelect = true;
  groupSelect = true;
  secondlangSelect = true;
  motherlangSelect = true;
  prevboardSelect = true;
  prevmediumSelect = true;
  prevstandardSelect = true;
  activitySelect = true;
  languageSelect = true;
  citizenSelect = true;
  bloodSelect = true;
  religionSelect = true;
  communitySelect = true;

 dropdownSchoolArray: any = [
    { id: 1, name: 'Vidyalakshmi Matric School' },
    { id: 2, name: 'Vidyalakshmi CBSE School' },
    { id: 3, name: 'Vidyalakshmi ICSE school' }
  ];

  dropdownAcademicYearArray: any = [
    { id:"2020", name:"2020" }
  ];

  dropdownBoardArray: any = [
    { id:1, name:"Matric " },
    { id:2, name:"CBSE" },
    { id:3, name:"State" },
    { id:4, name:"ICSE" },
    { id:5, name:"Other" }
  ];

  dropdownMediumArray: any = [
    { id:1, name:"English" },
    { id:2, name:"Tamil" },
    { id:3, name:"Sanskrit" },
    { id:4, name:"Hindi" },
    { id:5, name:"Telugu" },
    { id:6, name:"Kannada" },
    { id:7, name:"Malayalam" }
  ];

  dropdownStandardArray: any = [
    { id:1, name:"Pre-KG" },
    { id:2, name:"LKG" },
    { id:3, name:"UKG" },
    { id:4, name:"I" },
    { id:5, name:"II" },
    { id:6, name:"III" },
    { id:7, name:"IV" },
    { id:8, name:"V" },
    { id:9, name:"VI" },
    { id:10, name:"VII" },
    { id:11, name:"VIII" },
    { id:12, name:"IX" },
    { id:13, name:"X" },
    { id:14, name:"XI" },
    { id:15, name:"XII" }
  ];

  
  dropdownGroupArray: any = [
    { id:1, name:"General" },
    { id:2, name:"Science" },
    { id:3, name:"Maths" },
    { id:4, name:"Social" },
    { id:5, name:"Computer" },
    { id:6, name:"Agri" },
    { id:7, name:"Account" }
  ];

  dropdownSecondLanguageArray: any = [
    { id:1, name:"English" },
    { id:2, name:"Tamil" },
    { id:3, name:"Sanskrit" },
    { id:4, name:"Hindi" },
    { id:5, name:"Telugu" },
    { id:6, name:"Kannada" },
    { id:7, name:"Malayalam" }
  ];

  dropdownMotherLanguageArray: any = [
    { id:1, name:"English" },
    { id:2, name:"Tamil" },
    { id:3, name:"Sanskrit" },
    { id:4, name:"Hindi" },
    { id:5, name:"Telugu" },
    { id:6, name:"Kannada" },
    { id:7, name:"Malayalam" }
  ];

  dropdownPrevBoardArray: any =[
    { id:1, name:"Matric " },
    { id:2, name:"CBSE" },
    { id:3, name:"State" },
    { id:4, name:"ICSE" },
    { id:5, name:"Other" }
  ];

  dropdownPrevMediumArray: any =[
    { id:1, name:"English" },
    { id:2, name:"Tamil" },
    { id:3, name:"Sanskrit" },
    { id:4, name:"Hindi" },
    { id:5, name:"Telugu" },
    { id:6, name:"Kannada" },
    { id:7, name:"Malayalam" }
  ];

  
  dropdownPrevStandardArray: any = [
    { id:1, name:"Pre-KG" },
    { id:2, name:"LKG" },
    { id:3, name:"UKG" },
    { id:4, name:"I" },
    { id:5, name:"II" },
    { id:6, name:"III" },
    { id:7, name:"IV" },
    { id:8, name:"V" },
    { id:9, name:"VI" },
    { id:10, name:"VII" },
    { id:11, name:"VIII" },
    { id:12, name:"IX" },
    { id:13, name:"X" },
    { id:14, name:"XI" },
    { id:15, name:"XII" }
  ];

  dropdownActivityArray: any =[
    { id:1, name:"Sport" },
    { id:2, name:"Music" },
    { id:3, name:"Drawing" },
    { id:4, name:"Cricket" },
    { id:5, name:"Game" },
    { id:6, name:"Playing" },
    { id:7, name:"Singing" }
  ];

  dropdownLanguageArray: any =[
    { id:1, name:"English" },
    { id:2, name:"Tamil" },
    { id:3, name:"Sanskrit" },
    { id:4, name:"Hindi" },
    { id:5, name:"Telugu" },
    { id:6, name:"Kannada" },
    { id:7, name:"Malayalam" }
  ];
  
 dropdownCitizenArray: any = [
  { id: 1, name: 'INDIAN' },
  { id: 2, name: 'FOREIGNER' },
  { id: 3, name: 'OTHER' }
];

dropdownBloodArray: any = [
  { id: 1, name: 'A+' },
  { id: 2, name: 'A-' },
  { id: 3, name: 'B+' },
  { id: 4, name: 'B-' },
  { id: 5, name: 'AB+' },
  { id: 6, name: 'AB-' },
  { id: 7, name: 'O+' },
  { id: 8, name: 'O-' },
  { id: 9, name: 'Other' }
];

dropdownReligionArray: any = [
  { id: 1, name: 'Hinduism (Hindu)' },
  { id: 2, name: 'Christianity (Christian)' },
  { id: 3, name: 'Islam (Muslim)' },
  { id: 4, name: 'Jainism' },
  { id: 5, name: 'Buddhism' },
  { id: 6, name: 'Sikhism' },
  { id: 7, name: 'Others' },
];

dropdownCommunityArray: any = [
  { id: 1, name: 'FC' },
  { id: 2, name: 'BC' },
  { id: 3, name: 'OBC' },
  { id: 4, name: 'MBC' },
  { id: 5, name: 'SC' },
  { id: 6, name: 'ST' },
  { id: 7, name: 'Other' }
];

dropdownCertificateArray: any = [
  { id: 1, name: 'TRANSFER CERTIFICATE' },
  { id: 2, name: 'BIRTH CERTIFICATE' },
  { id: 3, name: 'COMMUNITY CERTIFICATE' },
  { id: 4, name: 'MARK SHEET' },
  { id: 5, name: 'NATIVE CERTIFICATE' },
  { id: 6, name: 'CONTACT CERTIFICATE' },
  { id: 7, name: 'OTHER' }
];



  dropdownArray = [
    [ "Vidyalakshmi Matric School", "Vidyalakshmi CBSE School", "Vidyalakshmi ICSE school" ],
    ["5dfdfldsfl24d55"],
    ["27-06-2020"],
    [ "2020"],
    [ "Matric ", "CBSE", "State", "ICSE", "Other"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu", "Kannada", "Malayalam"],
    [ "Pre-KG", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    [ "General", "General", "General", "General", "General"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu", "Kannada", "Malayalam"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu", "Kannada", "Malayalam"],
    [ "Matric ", "CBSE", "State", "ICSE", "Other"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu", "Kannada", "Malayalam"],
    [ "Pre-KG", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    [ "A1positive", "A positive", "OPositive", "AB+", "AB-13"],
    [ "HINDU", "MUSLIM", "CHRISTIAN", "SIKKIM", "OTHERS14"],
    [ "BC", "MBC", "SC", "ST", "OTHERS15"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu", "Kannada", "Malayalam"],
    [ "INDIAN", "FOREIGNER", "OTHER" ],
    [ "TRANSFER CERTIFICATE", "BIRTH CERTIFICATE",  "COMMUNITY CERTIFICATE", "MARKSHEET18"],
   
    
  ]
 
  fileData: File = null;
  constructor(
    private apiService: RestApiService, 
    private commonService: CommonService,
    public formBuilder: FormBuilder, 
    private http:HttpClient,
    private route: ActivatedRoute, 
    private router: Router) {
    
    this.resourceID = this.route.snapshot.paramMap.get('id');
    this.url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/'+this.resourceID;
    console.log(this.url);
    this.http.get<any>(this.url).toPromise().then(data => {

     
      const dt = data;
      console.log('-----data-----', data)
       if(dt['student']){
         console.log(dt['student']);
         this.SViewitems=dt['student'];
         this.SViewitems.stu_read_mode=1;
         
         this.SViewDoc=dt['studentdocument'];
         
         if(this.SViewitems.stu_prf_current_Semester>3){
          this.validationform.controls['stu_prev_degree_code'].enable();
          this.validationform.controls['stu_prev_medium_ins_fk'].enable();
          this.previousSchoolOpt = true;
         } else {
          this.previousSchoolOpt = false; 
         } 
         
         if(this.SViewitems.stu_prf_citizen_fk==2){
          this.foreigndetailOpt = true;
         } else {
          this.foreigndetailOpt = false; 
         } 

         if(this.SViewitems.stu_prf_third_lang!="") {
          this.SViewitems.stu_prf_third_lang =  this.SViewitems.stu_prf_third_lang.split(",");
         }

         if(this.SViewitems.stu_prf_co_curr!="") {
          this.SViewitems.stu_prf_co_curr =  this.SViewitems.stu_prf_co_curr.split(",");
         }         
         
         this.imagefilename = this.SViewitems.stu_adm_stu_image;
         console.log(this.SViewitems.stu_prf_app_No);
         this.parseDate(this.SViewitems.stu_prf_dob);
         this.SViewitems.stu_prf_age=this.dobValue;
       }


       if(data.studentdocument.length>0)
       {
         this.studentdocument = data.studentdocument;
         console.log( '-------studentdocument------', this.studentdocument)
         /* var i=0
               studentdocument.forEach( cols => {
                   console.log('----i-----',i)
                   this.addCertificateColumn()
                   i++;
                 });
 
         var j=0
         studentdocument.forEach( cols => {
 
               this.validationform.controls.certificateColumns['controls'][j].patchValue({
                 certificateDate       : cols.create_date,
                 certificateAttach     : cols.crt_attach,
                 certificateNo         : cols.crt_cert_no
               })
               j++;
             })  */
       }

       
    })


    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];

    
    this.schoolSelect = false;
    this.yearSelect = false;
    this.boardSelect = false;
    this.mediumSelect = false;
    this.standardSelect = false;
    this.groupSelect = false; 
    this.secondlangSelect = false;
    this.motherlangSelect = false;
    this.prevboardSelect = false;
    this.prevmediumSelect = false;
    this.prevstandardSelect = false;
    this.activitySelect = false;
    this.languageSelect = false;
    this.citizenSelect = false;
    this.bloodSelect = false;
    this.religionSelect = false;
    this.communitySelect = false;

  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
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
    this.appRandomNumber = this.makeRandom();
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Form Validation', path: '/', active: true }];

    this.uploadProfileImageForm = this.formBuilder.group({
      stu_adm_stu_image: ['']
    });

    this.validationform = this.formBuilder.group({
      col_code_fk: [null, [Validators.required]],
      stu_prf_app_No: ['', [Validators.required]],
      stu_prf_app_date: ['', [Validators.required]],
      stu_prf_stud_name: ['', [Validators.required]],
      stu_stud_mname: [''],
      stu_stud_lname: [''],
      stu_adm_mode: ['1', [Validators.required]],
      stu_prf_current_Year: [null, [Validators.required]],
      stu_prf_degree_code: [null, [Validators.required]],
      stu_prf_branch_Code: [null, [Validators.required]],
      stu_prf_current_Semester: [null, [Validators.required]],
      stu_prf_current_batch: [null, [Validators.required]],
      stu_prf_sec_lang: [null, [Validators.required]],
      stu_read_mode: ['1', [Validators.required]],
      stu_mother_medium_ins_fk: [null],
      stu_prev_degree_code: [null, [Validators.required]],
      stu_prev_medium_ins_fk: [null, [Validators.required]],
      stu_adm_prev_colname: [''],
      stu_adm_prev_class: [null],
      stu_prf_age: [''],
      stu_prf_fathers_name: ['', [Validators.required]],
      stu_prf_guardian_name: [''],
      stu_prf_guardian_aadhar: [''],
      stu_prf_fathers_qual: [''],
      stu_prf_fathers_occup: [''],
      stu_prf_fathers_anninc: ['', [Validators.required]],
      stu_prf_mothers_name: [''],
      stu_prf_mothers_occup: [''],
      stu_prf_mothers_anninc: [''],
      stu_prf_parent_email: [''],
      stu_prf_mobile_no: [''],
      stu_prf_plc_of_livng: ['', [Validators.required]],
      stu_prf_mem_of_serv_org: [''],
      stu_prf_parents_old_stu: ['0', [Validators.required]],
      stu_prf_family_size: ['', [Validators.required]],
      stu_prf_sex: ['1', [Validators.required]],
      stu_prf_plc_of_birth: [''],
      stu_prf_bldgrp_fk: [null],
      stu_prf_religion_fk: [null],
      stu_prf_caste_fk: [null],
      stu_prf_community_fk: [null],
      stu_prf_stu_email: [''],
      stu_prf_stu_aadhar: [''],
      stu_prf_stu_emis: [''],
      stu_prf_stu_bank: [''],
      stu_prf_parents_handicap: ['2', [Validators.required]],
      stu_prf_visualhandy: ['2', [Validators.required]],
      stu_prf_remarks: [''],
      stu_prf_medical: [''],
      stu_prf_co_curr: [null],
      stu_prf_third_lang: [null],
      stu_prf_mother_tongue_fk: [null],
      stu_prf_citizen_fk: [null],
      stu_prf_bus: ['2', [Validators.required]],


      stu_foreign_country_name: ['',[Validators.required]],
      stu_foreign_passport_no: ['',[Validators.required]],
      stu_foreign_passport_valid_date: ['',[Validators.required]],
      stu_foreign_visa_no: ['',[Validators.required]],
      stu_foreign_visa_valid_date: ['',[Validators.required]],


      con_per_add: ['', [Validators.required]],
      con_per_state: ['', [Validators.required]],
      con_per_cntry: [''],
      con_per_pincode: [''],
      con_per_phone: ['', [Validators.required]],
      con_rail_stn: [''],
      con_cont_add: ['', [Validators.required]],
      con_cont_state: ['', [Validators.required]],
      con_cont_cntry: [''],
      con_cont_pincode: [''],
      con_cont_phone: ['', [Validators.required]],
      cert_code_fk: [''],
      crt_cert_date: [''],
      crt_cert_no: [''],
      stu_prf_dob: [''],





      previousschoolinfo: this.formBuilder.array([
        
      ]),
      

      certificateColumns: this.formBuilder.array([]),
      //certificateName:['', [Validators.required]],
      //certificateDate:['', [Validators.required]],
      //certificateNo:['', [Validators.required]],
      //certificateAttach:['', [Validators.required]]


    });


    this.validationform.controls['stu_prev_degree_code'].disable();
    this.validationform.controls['stu_prev_medium_ins_fk'].disable();
    //this.validationform.controls['stu_adm_prev_colname'].disable();
    //this.validationform.controls['stu_adm_prev_class'].disable();

    this.validationform.controls['stu_foreign_country_name'].disable();
    this.validationform.controls['stu_foreign_passport_no'].disable();
    this.validationform.controls['stu_foreign_passport_valid_date'].disable();
    this.validationform.controls['stu_foreign_visa_no'].disable();
    this.validationform.controls['stu_foreign_visa_valid_date'].disable();

    this.duplicateCertifcateColumns = this.validationform.get('certificateColumns') as FormArray;
    this.submit = false;
    this.formsubmit = false;
    //this.addCertificateColumn();
  }




  FieldsChange(event:any)
  {
    if(event.target.checked == true)
    {
      var con_per_add     = ((this.validationform.value.con_per_add !=null) ? this.validationform.value.con_per_add : '');
      var con_per_state   = ((this.validationform.value.con_per_state != null) ? this.validationform.value.con_per_state : '');
      var con_per_cntry   = ((this.validationform.value.con_per_cntry != null) ? this.validationform.value.con_per_cntry : '');
      var con_per_pincode = ((this.validationform.value.con_per_pincode !=null) ? this.validationform.value.con_per_pincode : '');
      var con_per_phone   = ((this.validationform.value.con_per_phone !=null) ? this.validationform.value.con_per_phone : '');
      var con_rail_stn    = ((this.validationform.value.con_rail_stn !=null) ? this.validationform.value.con_rail_stn : '');
      
      this.validationform.patchValue({
        con_cont_add:     con_per_add,
        con_cont_state:   con_per_state,
        con_cont_cntry:   con_per_cntry,
        con_cont_pincode: con_per_pincode,
        con_cont_phone:   con_per_phone
      })
      console.log('-----validationform-----', this.validationform.value) 
    }else if(event.target.checked == false)
    {
      this.validationform.patchValue({
        con_cont_add:     '',
        con_cont_state:   '',
        con_cont_cntry:   '',
        con_cont_pincode: '',
        con_cont_phone:   ''
      })
    }
    
  }
  

  parseGroup(event:any)
  {
    
    this.groupSelect = true;
    console.log(event);
    let eventValue = event.id;
    //console.log('----event----', eventDate)

    if(event.name =='Pre-KG' || event.name =='LKG')
    {
      this.validationform.controls['stu_prev_degree_code'].disable();
    this.validationform.controls['stu_prev_medium_ins_fk'].disable();
    //this.validationform.controls['stu_adm_prev_colname'].disable();
    //this.validationform.controls['stu_adm_prev_class'].disable();

      this.previousSchoolOpt = false;
    }else if(event.name !='Pre-KG' || event.name !='LKG')
    {
      this.validationform.controls['stu_prev_degree_code'].enable();
    this.validationform.controls['stu_prev_medium_ins_fk'].enable();
    //this.validationform.controls['stu_adm_prev_colname'].enable();
    //this.validationform.controls['stu_adm_prev_class'].enable();
      this.previousSchoolOpt = true;
    }
    if( eventValue == '14' || eventValue == '15' )
    { 
      
      this.dropdownGroupArray = [
        { id:1, name:"General" },
        { id:2, name:"Science" },
        { id:3, name:"Maths" },
        { id:4, name:"Social" },
        { id:5, name:"Computer" },
        { id:6, name:"Agri" },
        { id:7, name:"Account" }
      ];
      this.groupSelect = false;
    }
    else
    {
      this.dropdownGroupArray = [
        { id:1, name:"General" }
      ];
      this.groupSelect = false;
    }
  }

  citizenEvent(event:any)
  {
    console.log('----event---', event)
    if( event.name =='FOREIGNER')
    {
      this.foreigndetailOpt = true;

      this.validationform.controls['stu_foreign_country_name'].enable();
      this.validationform.controls['stu_foreign_passport_no'].enable();
      this.validationform.controls['stu_foreign_passport_valid_date'].enable();
      this.validationform.controls['stu_foreign_visa_no'].enable();
      this.validationform.controls['stu_foreign_visa_valid_date'].enable();

    }else{
      this.foreigndetailOpt = false;

        this.validationform.controls['stu_foreign_country_name'].disable();
        this.validationform.controls['stu_foreign_passport_no'].disable();
        this.validationform.controls['stu_foreign_passport_valid_date'].disable();
        this.validationform.controls['stu_foreign_visa_no'].disable();
        this.validationform.controls['stu_foreign_visa_valid_date'].disable();
    }

  }

  parseDate(eventDate:any)
  {
    //console.log('----event----', eventDate)
    if( eventDate != '')
    {
      var dobage = this.ageCalculation( eventDate );
      
      if( dobage != null)
      {
        console.log('-----dobage-----', dobage)
        this.validationform.patchValue({
          stu_prf_age: dobage
        });
      }
      
    }
  }

  ageCalculation(dateString)
  {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
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
    //this.createCertificateOpt = true;
    this.duplicateCertifcateColumns.push(this.createCertificateColumnForm());
  }

  removeCertificateColumn(index) {
    this.duplicateCertifcateColumns.removeAt(index);
  }

  downloadFile(filename)
  {
    
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'http://sms.akst.in/writable/uploads/'+filename);
    link.setAttribute('download', 'http://sms.akst.in/writable/uploads/'+filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  onFileChanged(event, indx) {

      
    setTimeout(() => {

     this.commonService.loaderShowHide(true);
     this.loader             = true;

     const formData = new FormData();      
     formData.append('certificate', event.target.files[0]);

     this.apiService.create('/student/document', formData).subscribe( files => {
       console.log('----file updated---' , files )
       
       /* this.validationform.controls.certificateColumns['controls'][indx].patchValue({
         certificatehiddenFile: files.filename
       }) */

       this.listOfFiles.push( {indx: files.filename} )

       this.commonService.loaderShowHide(false);
       this.loader             = false;

     });
     console.log('----listOfFiles----', this.listOfFiles )
    }, 100);
   
}

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
    this.submitted = true;
    
    if (this.validationform.invalid) {
      console.log(this.validationform);
     return;
    }
    //console.log( JSON.stringify(this.validationform.value));
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.validationform.value));
    /*
 console.log( JSON.stringify(this.validationform.value));
     
     let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student'
    this.http.post<any>(url, this.validationform.value  ).subscribe(data => {
      console.log(data);
    })

    */
    

   var certificateColumns = this.validationform.value.certificateColumns;

   var cartificateDataArray = [];

   console.log("certificateColumns.length::"+certificateColumns.length);
   if( certificateColumns.length > 0)
   {
     console.log('----certificateColumns-----', certificateColumns)

     console.log('-----listOfFiles------', this.listOfFiles);
     var i=0;
     certificateColumns.forEach( cert =>{
       cartificateDataArray.push(
         {
             "cert_code_fk": cert.certificateName,
             "crt_cert_date" : cert.certificateDate,
             "crt_cert_no" : cert.certificateNo,
             "crt_returned" : 0,
             "crt_collected" : 0,
             "crt_attach" : this.listOfFiles[i].indx,			
         }
       )
       i++;
     })
           
   }

    let postData = {
      "col_code_fk": this.form.col_code_fk.value,
      "stu_prf_stud_name": this.form.stu_prf_stud_name.value,
        "stu_stud_mname": this.form.stu_stud_mname.value,
        "stu_stud_lname": this.form.stu_stud_lname.value,
        "stu_prf_dob": this.form.stu_prf_dob.value,
        "stu_prf_sex": this.form.stu_prf_sex.value,
        "stu_prf_mar_status": 0,
        "stu_prf_roll_No": "",
        "stu_prf_app_No": this.form.stu_prf_app_No.value,
        "stu_prf_app_name": "",
        "stu_prf_app_date": "28-06-2020",
        "stu_prf_quota": 0,
        "stu_prf_current_Year": this.form.stu_prf_current_Year.value,
        "stu_prf_current_batch": this.form.stu_prf_current_batch.value,
        "stu_prf_lab_batch":"" ,
        "stu_prf_current_Semester": this.form.stu_prf_current_Semester.value,
        "stu_prf_seat_type_fk": 0,
        "stu_prf_reg_no": "",
        "stu_prf_degree_code": this.form.stu_prf_degree_code.value,
        "stu_prf_branch_Code": this.form.stu_prf_branch_Code.value,
        "stu_prf_cardno": 0,
        "stu_prf_lib_id": 0,
        "stu_prf_jmonth": 0,
        "stu_prf_jyear": 0,
        "stu_prf_attempts": 0,
        "stu_prf_rejoin_status": 0,
        "stu_prf_fathers_name": this.form.stu_prf_fathers_name.value,
        "stu_prf_mothers_name": this.form.stu_prf_mothers_name.value,
        "stu_prf_guardian_name": this.form.stu_prf_guardian_name.value,
        "stu_prf_fathers_qual": this.form.stu_prf_fathers_qual.value,
        "stu_prf_mothers_qual": "",
        "stu_prf_fathers_occup": this.form.stu_prf_fathers_occup.value,
        "stu_prf_mothers_occup": this.form.stu_prf_mothers_occup.value,
        "stu_prf_fathers_anninc": this.form.stu_prf_fathers_anninc.value,
        "stu_prf_mothers_anninc": this.form.stu_prf_mothers_anninc.value,
        "stu_prf_plc_of_livng": this.form.stu_prf_plc_of_livng.value,
        "stu_prf_plc_of_birth": this.form.stu_prf_plc_of_birth.value,
        "stu_prf_parents_handicap": this.form.stu_prf_parents_handicap.value,
        "stu_prf_parents_old_stu": this.form.stu_prf_parents_old_stu.value,
        "stu_prf_co_curr": this.form.stu_prf_co_curr.value,
        "stu_prf_mem_of_serv_org": this.form.stu_prf_mem_of_serv_org.value,
        "stu_prf_family_size": this.form.stu_prf_family_size.value,
        "stu_prf_community_fk": this.form.stu_prf_community_fk.value,
        "stu_prf_caste_fk": this.form.stu_prf_caste_fk.value,
        "stu_prf_religion_fk": this.form.stu_prf_religion_fk.value,
        "stu_prf_mother_tongue_fk": this.form.stu_prf_mother_tongue_fk.value,
        "stu_prf_citizen_fk": this.form.stu_prf_citizen_fk.value,
        "stu_prf_medium_ins_fk": 0,
        "stu_prf_bldgrp_fk": this.form.stu_prf_bldgrp_fk.value,
        "stu_prf_visualhandy": this.form.stu_prf_visualhandy.value,
        "stu_prf_parent_email": this.form.stu_prf_parent_email.value,
        "stu_prf_mobile_no":  this.form.stu_prf_mobile_no.value,
        "stu_prf_stu_email": this.form.stu_prf_stu_email.value,
        "stu_prf_remarks": this.form.stu_prf_remarks.value,
        "stu_adm_no": "",
        "stu_adm_date": "0000-00-00",
        "stu_adm_barcode": "",
        "stu_adm_referby": "",
        "stu_adm_tcno": "",
        "stu_adm_entry_mode": this.form.stu_adm_mode.value,
        "stu_adm_tcdate": "0000-00-00",
        "stu_adm_sections": 0,
        "stu_adm_debar_reason": "",
        "stu_adm_prev_colname": this.form.stu_adm_prev_colname.value,
        "stu_adm_app_no": "",
        "stu_adm_app_dt": "0000-00-00",
        "stu_adm_stu_image": this.imagefilename,
        "stu_adm_mode":  this.form.stu_adm_mode.value,
        "stu_adm_status": 6,
        "stu_detained": 0,
        "stu_discontinue": 0,
        "stu_adm_fee": 0,
        "stu_adm_class": 0,
        "stu_prf_promotion_status": 0,
        "stu_group_id_fk": 0,
        "stu_adm_std": 0,
        "stu_prf_sec_lang": this.form.stu_prf_sec_lang.value,
        "stu_prf_third_lang": this.form.stu_prf_third_lang.value,
        "stu_adm_fee_coll": 0,
        "stu_adm_refno": 0,
        "stu_read_mode":this.form.stu_read_mode.value,
        "stu_mother_medium_ins_fk" : this.form.stu_prf_mother_tongue_fk.value,
        "stu_prev_degree_code":this.form.stu_prev_degree_code.value,
        "stu_prev_medium_ins_fk":this.form.stu_prev_medium_ins_fk.value,
        "stu_prf_guardian_aadhar" : this.form.stu_prf_guardian_aadhar.value,
        "stu_adm_prev_class": this.form.stu_adm_prev_class.value,
        "stu_prf_stu_aadhar":this.form.stu_prf_stu_aadhar.value,
        "stu_prf_stu_emis":this.form.stu_prf_stu_aadhar.value,
        "stu_prf_stu_bank":this.form.stu_prf_stu_bank.value,
        "stu_prf_medical":this.form.stu_prf_medical.value,
        "stu_prf_bus":this.form.stu_prf_bus.value,
        "stu_prf_age" : "20",
        "con_per_add": this.form.con_per_add.value,
        "con_per_state" : this.form.con_per_state.value,
        "con_per_cntry" : this.form.con_per_cntry.value,
        "con_per_pincode" : this.form.con_per_pincode.value,
        "con_per_phone" : this.form.con_per_phone.value,
        "con_cont_add" : this.form.con_cont_add.value,
        "con_cont_state" : this.form.con_cont_add.value,
        "con_cont_cntry" : this.form.con_cont_cntry.value,           
        "con_cont_pincode" : this.form.con_cont_pincode.value,  
        "con_cont_phone" : this.form.con_cont_phone.value,  
        "con_experience" : "exp",
        "con_interrupt" :"inter",
        "con_identify_marks" : "identify",
        "con_rel_info" : "info",
        "con_mode" : "mode",
        "con_rail_stn" : this.form.con_rail_stn.value,
        "stu_foreign_country_name" :this.form.stu_foreign_country_name.value,
        "stu_foreign_passport_no" :this.form.stu_foreign_passport_no.value,
        "stu_foreign_passport_valid_date" :this.form.stu_foreign_passport_valid_date.value,
        "stu_foreign_visa_no" :this.form.stu_foreign_visa_no.value,
        "stu_foreign_visa_valid_date" :this.form.stu_foreign_visa_valid_date.value,
        "student_documents": cartificateDataArray        
        }

             


     console.log( postData);
     console.log( JSON.stringify(postData));

     
    let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/update/'+this.resourceID;
   this.http.post<any>(url, postData  ).subscribe(data => {

        
     console.log(data);
     this.router.navigate(['/school/studentlist']);
   })

  }


  makeRandom()  {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 10;  
    let text = "";

    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }


  

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadProfileImageForm.get('stu_adm_stu_image').setValue(file);
      this.validSubmitUpload();
    }
  }

  validSubmitUpload() {
    const formData = new FormData();
    formData.append('file', this.uploadProfileImageForm.get('stu_adm_stu_image').value);
    let url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/upload';
    this.http.post<any>(url, formData).subscribe(
    data => {
      console.log(data);
      this.imagefilename = data['filename'];
      console.log(this.imagefilename);
    },
    error => {
      console.log(error);
    }

    );
  }

  
  getArrayNameById(VarArray,id){
    if(id>0){
      let ArrayName = VarArray.filter(x => x.id === id);
      return ArrayName[0]['name'];
    } else {
      return 'None';
    }
    //return VarArray.filter(x => x.id === id);
  }

  

}
