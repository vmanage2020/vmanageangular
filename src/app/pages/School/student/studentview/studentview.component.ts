import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.scss']
})
export class StudentviewComponent implements OnInit {

  url='http://sms.akst.in/public/api/student/5';
 mygrou=[1,2,3,4,5];
  SViewitems=[];
  
  objectKeys = Object.keys;
  constructor(private http:HttpClient) {
    this.http.get<any>(this.url).toPromise().then(data => {
   
     for(let key in data)
      if(data.hasOwnProperty(key))
      this.SViewitems.push(data);
      
     // console.log( this.SListitems[1].users[0].stu_prf_stud_name+"_____________hi");
    })
   }

  ngOnInit() {
  }

}
