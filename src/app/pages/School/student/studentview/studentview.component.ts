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
  SViewitems=[];
  resourceID:any;
  url:any;
  objectKeys = Object.keys;

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

       if(dt['user']){
         console.log(dt['user']);
       }
    })
   }

  ngOnInit() {
  }

}
