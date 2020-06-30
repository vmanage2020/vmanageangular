import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  dropdownArrayxx = [
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

ctrlmainhead=["Account Information","Previous School Information","Parent Information","Student Information","Other Information","Permanent Address","Contact Address"]
ctrlsubhead=[["School Name","Application No","Date Applied","Student First Name","Student Middle Name","Student Last Name","Entry Mode","Batch/Academic year","Board Name","Medium Name","Standard ","Group Name","Second Language","Reading ability","Mother Tongue","Date of Birth","Age"],
["Previous School Board Name","Medium Of Previous Study","Previous School Name","Previous Standard "],["Father/Guardian First Name","Father/Guardian Last Name","Father/Guardian Aadhar Number","Father Qualification","Father Occupation","Father Annual Income","Mother Name","Mother Occupation","Mother Annual Income","Parent Email ID","Parent Mobile No","Place of Living","Parents Old Student","Family size"],
["Gender","Place of Birth","Blood Group","Religion","Class/Caste","Community","Student Email ID","Student Aadhar Number","EMIS Number","Student Bank Details"],["Physically challenged","Visual Defect","Any Medical Issues","Co-Curriculum Activity","Language known","Citizen","Remarks","Student Image","Bus Facility Requirement"],["Address","State","Country","Pincode ","Phone Number","Nearest Railway Station"],
["Address","State","Country","Pincode ","Phone Number"]]
ctrllabel:any=[["col_code_fk","stu_prf_app_No","stu_prf_app_date","stu_prf_stud_name","stu_stud_mname","stu_stud_lname","stu_adm_mode","stu_prf_current_Year","stu_prf_degree_code","stu_prf_branch_Code","stu_prf_current_Semester","stu_prf_current_batch","stu_prf_sec_lang","stu_read_mode","stu_mother_medium_ins_fk","stu_prf_dob","stu_prf_age"],["stu_prev_degree_code","stu_prev_medium_ins_fk","stu_adm_prev_colname","stu_adm_prev_class"],
["stu_prf_fathers_name","stu_prf_guardian_name","stu_prf_guardian_aadhar","stu_prf_fathers_qual","stu_prf_fathers_occup","stu_prf_fathers_anninc","stu_prf_mothers_name","stu_prf_mothers_occup","stu_prf_mothers_anninc","stu_prf_parent_email","stu_prf_mobile_no","stu_prf_plc_of_livng","stu_prf_parents_old_stu","stu_prf_family_size"],["stu_prf_sex","stu_prf_plc_of_birth","stu_prf_bldgrp_fk","stu_prf_religion_fk","stu_prf_caste_fk","stu_prf_community_fk","stu_prf_stu_email","stu_prf_stu_aadhar","stu_prf_stu_emis","stu_prf_stu_bank"],
["stu_prf_parents_handicap","stu_prf_visualhandy","stu_prf_medical","stu_prf_co_curr","stu_prf_mother_tongue_fk","stu_prf_citizen_fk","stu_prf_remarks","stu_adm_stu_image","stu_prf_bus"],["con_per_add","con_per_state","con_per_cntry","con_per_pincode","con_per_phone","con_rail_stn"],["con_per_add","con_per_state","con_per_cntry","con_per_pincode","con_per_phone"]]
checkdownarr=[[0,0,0,0,0,0,0,7,8,9,10,0,12,0,14,0,0],[0,1,25,3],[25,25,25,25,25,25,25,25,25,25,25,25,25,25],[25,25,2,3,4,25,25,25,25],[25,25,25,25,4,5,25,25,25],[25,25,25,25,25,25],[25,25,25,25,25],[]]
dropdownArray = [[[ "Vidyalakshmi school", "Vidyalakshmi school2", "Vidyalakshmi school3", "schoolVidyalakshmi school4", "Vidyalakshmi school5"],[],[],[],[],[],[],[ "2020", "2021", "2019", "2023", "2024"],[ "metric ", "cbse", "state", "icse", "others"],[ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[ "X", "XI", "XII", "XIII", "XIV"],[],["English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[],[ "English", "Tamil", "Sanskrit", "Hindi", "Telugu"],[],[]],
[[ "metric ", "cbse", "state", "icse", "others10"],[ "English", "Tamil", "Sanskrit", "Hindi", "Telugu11"],[],  [ "X", "XI", "XII", "XIII", "XIV12"]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[ "A1positive", "A positive", "OPositive", "AB+", "AB-13"],[ "HINDU", "MUSLIM", "CHRISTIAN", "SIKKIM", "OTHERS14"],[ "BC", "MBC", "SC", "ST", "OTHERS15"],[],[],[],[]],[[],[],[],[], [ "English", "Tamil", "Sanskrit", "Hindi", "Telugu16"],[ "INDIAN", "FOREIGNERS",  "OTHERS17"],[],[],[]],[[],[],[],[],[],[]],[[],[],[],[],[]],[[],[],[],[]]]

certhead=["Certificate Information"];
cersubhead=["Certificate Name","Date ","Certificate No","Attachment "];
cerlabel=[["cert_code_fk","crt_cert_date","crt_cert_no","crt_attach"],["cert_code_fk","crt_cert_date","crt_cert_no","crt_attach"]];
cerdownarr=[0,25,25,25];
cerdroparr=[["TRANSFER CERTIFICATE","BIRTH CERTIFICATE","COMMUNITY CERTIFICATE","MARK SHEET","AADHAR CARD","RATION CARD","PAN CARD","PHOTOS"],["TRANSFER CERTIFICATE","BIRTH CERTIFICATE","COMMUNITY CERTIFICATE","MARK SHEET","AADHAR CARD","RATION CARD","PAN CARD","PHOTOS"],[],[]]

  constructor(private http:HttpClient,private route: ActivatedRoute) {
    this.resourceID = this.route.snapshot.paramMap.get('id');

  this.url='http://sms.akst.in/public/api/student/'+this.resourceID;
  console.log(this.url);
    this.http.get<any>(this.url).toPromise().then(data => {
   
     //for(let key in data)
     // if(data.hasOwnProperty(key))
    //  this.SViewitems.push(data);
      
     //console.log( this.SListitems[1].users[0].stu_prf_stud_name+"_____________hi");
     //console.log( this.SViewitems);
     const dt = data;

       if(dt['student']){
         console.log(dt['student']);

         this.SViewitems=dt['student'];
         
         if(this.SViewitems.stu_adm_mode==1) {
          this.SViewitems.stu_adm_mode="Regular";
         } else {
          this.SViewitems.stu_adm_mode="Transfer";
         }

         if(this.SViewitems.stu_read_mode==1) {
          this.SViewitems.stu_read_mode="Yes";
         } else {
          this.SViewitems.stu_read_mode="No";
         }

         if(this.SViewitems.stu_prf_parents_old_stu==1) {
          this.SViewitems.stu_prf_parents_old_stu="Yes";
         } else {
          this.SViewitems.stu_prf_parents_old_stu="No";
         }

         if(this.SViewitems.stu_prf_sex==1) {
          this.SViewitems.stu_prf_sex="Male";
         } else if(this.SViewitems.stu_prf_sex==2) {
          this.SViewitems.stu_prf_sex="Female";
        } else {
          this.SViewitems.stu_prf_sex="---";
         }

         if(this.SViewitems.stu_prf_parents_handicap==1) {
          this.SViewitems.stu_prf_parents_handicap="Yes";
          } else {
          this.SViewitems.stu_prf_parents_handicap="No";
         }
         
         if(this.SViewitems.stu_prf_visualhandy==1) {
          this.SViewitems.stu_prf_visualhandy="Yes";
         } else {
          this.SViewitems.stu_prf_visualhandy="No";
         }
         
         if(this.SViewitems.stu_prf_bus==1) {
          this.SViewitems.stu_prf_bus="Yes";
         } else {
          this.SViewitems.stu_prf_bus="No";
         }
         

         this.SViewDoc=dt['studentdocument'];
        // console.log(this.SViewitems.student_documents);
        console.log(this.SViewDoc);
       }
    })
    //console.log(this.ctrlmainhead[0])
   }

  ngOnInit() {
    
  }

}
