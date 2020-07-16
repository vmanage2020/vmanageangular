import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.scss']
})
export class StudentviewComponent implements OnInit {

  
  mygrou=[1,2,3,4,5];
  SViewitems:any=[];
  SViewDoc:any=[];
  newarray:any=[]
  resourceID:any;
  url:any;
  objectKeys = Object.keys;

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

  dropdownArrayxx = [
    [ "Vidyalakshmi school", "Vidyalakshmi school2", "Vidyalakshmi school3", "Vidyalakshmi school4", "Vidyalakshmi school5"],
    ["5dfdfldsfl24d55"],
    ["27-06-2020"],
    [ "2020", "2021", "2019", "2023", "2024"],
    [ "metric ", "cbse", "state", "icse", "others"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "X", "XI", "XII", "XIII", "XIV"],
    [ "General", "General", "General", "General", "General"],
    ["English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],
    [ "metric ", "cbse", "state", "icse", "others10"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu11"],
    [ "X", "XI", "XII", "XIII", "XIV12"],
    [ "A1positive", "A positive", "OPositive", "AB+", "AB-13"],
    [ "HINDU", "MUSLIM", "CHRISTIAN", "SIKKIM", "OTHERS14"],
    [ "BC", "MBC", "SC", "ST", "OTHERS15"],
    [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu16"],
    [ "INDIAN", "FOREIGNERS",  "OTHERS17"],
    [ "TRANSFER CERTIFICATE", "BIRTH CERTIFICATE",  "COMMUNITY CERTIFICATE", "MARKSHEET18"],
   
    
  ]

ctrlmainhead=["Account Information","Previous School Information","Parent Information","Student Information","Other Information","Foreigner Information","Permanent Address","Contact Address"]
ctrlsubhead=[["School Name","Application No","Date Applied","Student First Name","Student Middle Name","Student Last Name","Entry Mode","Batch/Academic year","Board Name","Medium Name","Standard ","Group Name","Second Language","Reading ability","Mother Tongue","Date of Birth","Age"],
["Previous School Board Name","Medium Of Previous Study","Previous School Name","Previous Standard "],["Father/Guardian First Name","Father/Guardian Last Name","Father/Guardian Aadhar Number","Father Qualification","Father Occupation","Father Annual Income","Mother Name","Mother Occupation","Mother Annual Income","Parent Email ID","Parent Mobile No","Place of Living","Parents Old Student","Family size"],
["Gender","Place of Birth","Blood Group","Religion","Community","Student Email ID","Student Aadhar Number","EMIS Number","Student Bank Details"],["Physically challenged","Visual Defect","Any Medical Issues","Co-Curriculum Activity","Language known","Citizen","Remarks","Student Image","Bus Facility Requirement"],["Country","Passport No","Passport Validate Date","Visa No","Visa Expiry Date"],["Address","State","Country","Pincode ","Phone Number","Nearest Railway Station"],
["Address","State","Country","Pincode ","Phone Number"]]
ctrllabel:any=[["col_code_fk","stu_prf_app_No","stu_prf_app_date","stu_prf_stud_name","stu_stud_mname","stu_stud_lname","stu_adm_mode","stu_prf_current_Year","stu_prf_degree_code","stu_prf_branch_Code","stu_prf_current_Semester","stu_prf_current_batch","stu_prf_sec_lang","stu_read_mode","stu_prf_mother_tongue_fk","stu_prf_dob","stu_prf_age"],["stu_prev_degree_code","stu_prev_medium_ins_fk","stu_adm_prev_colname","stu_adm_prev_class"],
["stu_prf_fathers_name","stu_prf_guardian_name","stu_prf_guardian_aadhar","stu_prf_fathers_qual","stu_prf_fathers_occup","stu_prf_fathers_anninc","stu_prf_mothers_name","stu_prf_mothers_occup","stu_prf_mothers_anninc","stu_prf_parent_email","stu_prf_mobile_no","stu_prf_plc_of_livng","stu_prf_parents_old_stu","stu_prf_family_size"],["stu_prf_sex","stu_prf_plc_of_birth","stu_prf_bldgrp_fk","stu_prf_religion_fk","stu_prf_community_fk","stu_prf_stu_email","stu_prf_stu_aadhar","stu_prf_stu_emis","stu_prf_stu_bank"],
["stu_prf_parents_handicap","stu_prf_visualhandy","stu_prf_medical","stu_prf_co_curr","stu_prf_third_lang","stu_prf_citizen_fk","stu_prf_remarks","stu_adm_stu_image","stu_prf_bus"],["stu_foreign_country_name","stu_foreign_passport_no","stu_foreign_passport_valid_date","stu_foreign_visa_no","stu_foreign_visa_valid_date"],["con_per_add","con_per_state","con_per_cntry","con_per_pincode","con_per_phone","con_rail_stn"],["con_per_add","con_per_state","con_per_cntry","con_per_pincode","con_per_phone"]]
checkdownarr=[[0,0,0,0,0,0,0,0,8,9,10,11,12,0,14,0,16],[0,1,25,3],[25,25,25,25,25,25,25,25,25,25,25,25,25,25],[25,25,2,3,4,25,25,25,25],[25,25,25,25,25,5,25,25,25],[25,25,25,25,25,25],[25,25,25,25,25],[]]
dropdownArray:any = [[["", "Vidyalakshmi school", "Vidyalakshmi school2", "Vidyalakshmi school3", "Vidyalakshmi school4", "Vidyalakshmi school5"],[],[],[],[],[],[],["", "2020", "2021", "2019", "2023", "2024"],["", "METRIC ", "CBSE", "STATE", "ICSE", "OTHERS"],["", "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[ "","PRE-KG","LKG", "UKG", "I", "II","III","IV","V","VI","VII","VIII","IX","X", "XI", "XII"],["","GENERAL","SCIENCE","MATHS","SOCIAL","COMPUTER","AGRI"],["","English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[],[ "","English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[],[]],
[[ "","metric ", "cbse", "state", "icse", "others10"],["", "English", "Tamil", "Sanskrit", "Hindi", "Telugu11"],[],  ["", "X", "XI", "XII", "XIII", "XIV12"]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],["", "A1positive", "A positive", "OPositive", "AB+", "AB-13"],["", "HINDU", "MUSLIM", "CHRISTIAN", "SIKKIM", "OTHERS14"],["", "BC", "MBC", "SC", "ST", "OTHERS15"],[],[],[],[]],[[],[],[],[], [ "","English", "Tamil", "Sanskrit", "Hindi", "Telugu","Kannada","Malayalam"],[ "","INDIAN", "FOREIGNER",  "OTHERS"],[],[],[]],[[],[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[]]]

certhead=["Certificate Information"];
cersubhead=["Certificate Name","Date ","Certificate No","Attachment "];
cerlabel=[["cert_code_fk","crt_cert_date","crt_cert_no","crt_attach"],["cert_code_fk","crt_cert_date","crt_cert_no","crt_attach"]];
cerdownarr=[0,25,25,25];
cerdroparr=[["TRANSFER CERTIFICATE","BIRTH CERTIFICATE","COMMUNITY CERTIFICATE","MARK SHEET","AADHAR CARD","RATION CARD","PAN CARD","PHOTOS"],["TRANSFER CERTIFICATE","BIRTH CERTIFICATE","COMMUNITY CERTIFICATE","MARK SHEET","AADHAR CARD","RATION CARD","PAN CARD","PHOTOS"],[],[]]
agevalue:any;
sexval:any;
phychan:any;
visdef:any;
busfacval:any;
emode:any;
readability:any;
stuinf:any=25;
stufore:any=25;
  constructor(private http:HttpClient,private route: ActivatedRoute) {

    let Metaurl='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/master';
    this.http.get<any>(Metaurl).toPromise().then(
      data => {
        console.log(data);
        this.dropdownBoardArray = data.boards;
        this.dropdownPrevBoardArray = data.boards;

        this.dropdownActivityArray = data.activities;

        this.dropdownMediumArray = data.languages;
        this.dropdownPrevMediumArray = data.languages;
        this.dropdownSecondLanguageArray = data.languages;
        this.dropdownMotherLanguageArray = data.languages;
        this.dropdownLanguageArray = data.languages;
        this.dropdownCertificateArray = data.certificates;
        this.dropdownCitizenArray = data.citizens;
        this.dropdownCommunityArray = data.communities;
        this.dropdownReligionArray = data.religions;
        this.dropdownBloodArray = data.bloodgroups;
        this.dropdownStandardArray = data.standards;

        this.dropdownPrevStandardArray = data.standards;

        //this.datagroup = data.groups;
        this.dropdownAcademicYearArray = data.years;
      // console.log( this.data+"__________shhhhh");
      }
    ) 


    this.resourceID = this.route.snapshot.paramMap.get('id');

  this.url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/student/'+this.resourceID;
 // console.log(this.url);
    this.http.get<any>(this.url).toPromise().then(data => {
   
     //for(let key in data)
     // if(data.hasOwnProperty(key))
    //  this.SViewitems.push(data);
      
     //console.log( this.SListitems[1].users[0].stu_prf_stud_name+"_____________hi");
     console.log( this.SViewitems);
     const dt = data;

       if(dt['student']){
        // console.log(dt['student']);

         this.SViewitems=dt['student'];
         
         if(this.SViewitems.stu_adm_mode==1) {
          this.SViewitems.stu_adm_mode="Regular";
          this.emode="Regular";
         } else {
          this.SViewitems.stu_adm_mode="Transfer";
          this.emode="Transfer";
         }

         if(this.SViewitems.stu_read_mode==1) {
          this.SViewitems.stu_read_mode="Yes";
          this.readability="Yes";
         } else {
          this.SViewitems.stu_read_mode="No";
          this.readability="No";
         }

         if(this.SViewitems.stu_prf_parents_old_stu==1) {
          this.SViewitems.stu_prf_parents_old_stu="Yes";
         } else {
          this.SViewitems.stu_prf_parents_old_stu="No";
         }

         if(this.SViewitems.stu_prf_sex==1) {
          this.SViewitems.stu_prf_sex="Male";
          this.sexval="Male";
         } else if(this.SViewitems.stu_prf_sex==2) {
          this.SViewitems.stu_prf_sex="Female";
          this.sexval="Female";
        } else {
          this.SViewitems.stu_prf_sex="---";
          this.sexval="---";
         }

         if(this.SViewitems.stu_prf_parents_handicap==1) {
          
          this.SViewitems.stu_prf_parents_handicap="Yes";
          this.phychan="Yes"
          } else {
          this.SViewitems.stu_prf_parents_handicap="No";
          this.phychan="No"
         }
         
         if(this.SViewitems.stu_prf_visualhandy==1) {
          this.SViewitems.stu_prf_visualhandy="Yes";
          this.visdef="Yes"
         } else {
          this.SViewitems.stu_prf_visualhandy="No";
          this.visdef="No"
         }
         
         if(this.SViewitems.stu_prf_bus==1) {
          this.SViewitems.stu_prf_bus="Yes";
          this.busfacval="Yes";
         } else {
          this.SViewitems.stu_prf_bus="No";
          this.busfacval="No";
         }
         

         this.SViewDoc=dt['studentdocument'];
        // console.log(this.SViewitems.student_documents);
      //  console.log(this.SViewDoc);
        this.parseDate(this.SViewitems.stu_prf_dob);
        //console.log(this.SViewitems.stu_prf_current_Semester+"=="+"Pre-KG" + "||" +this.SViewitems.stu_prf_current_Semester+"=="+"LKG"+"__________________Hi");
        if(this.SViewitems.stu_prf_current_Semester==1 || this.SViewitems.stu_prf_current_Semester==2)
        {
          this.stuinf=1;
         $("#psi").hide();
        // this.ctrlmainhead.splice(this.stuinf, 1);
         
        }
        if(this.SViewitems.stu_prf_citizen_fk!=2)
        {
          this.stufore=5;
           $("#fi").hide();
        }
        if(this.SViewitems.stu_adm_stu_image==null)
        {
          this.daimag="http://sms.akst.in/writable/uploads/student.png";
        } else {
          this.daimag="http://sms.akst.in/writable/uploads/"+this.SViewitems.stu_adm_stu_image; 
        }
        
       // String(this.parseDate(this.SViewitems.stu_prf_dob));
        //this.dropdownArray[0][16].push(this.parseDate(this.SViewitems.stu_prf_dob));
      // this.agevalue=String(this.parseDate(this.SViewitems.stu_prf_dob));
      //  this.dropdownArray[0][16].push(this.agevalue);
      //console.log(this.daimag);
     // console.log(this.dropdownMotherLanguageArray[this.SViewitems.stu_mother_medium_ins_fk-1].name+"__________hello");
       }
    })
    //console.log(this.ctrlmainhead[0])
   }

  ngOnInit() {
    
  }
  dobValue:any;
  daimag:any;
  parseDate(eventDate:any)
  {
    //console.log('----event----', eventDate)
    if( eventDate != '')
    {
      var dobage = this.ageCalculation( eventDate );
      this.dobValue = dobage;
      if( dobage != null)
      {
        console.log('-----dobage-----', dobage)
        /* this.validationform.patchValue({
          stu_prf_age: dobage
        }); */
      }
      
    }
  }

  ageCalculation(dateString:any)
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
