import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stuentlist',
  templateUrl: './stuentlist.component.html',
  styleUrls: ['./stuentlist.component.scss']
})
export class StuentlistComponent implements OnInit {
  url='http://sms.akst.in/public/api/students';
 mygrou=[1,2,3,4,5];
  SListitems=[];
  contentlist=[];
  objectKeys = Object.keys;
  constructor(private http:HttpClient) {
    this.http.get<any>(this.url).toPromise().then(data => {
   
     for(let key in data)
      if(data.hasOwnProperty(key))
      this.SListitems.push(data);
      this.contentlist.push( this.SListitems[1]);
     // console.log( this.SListitems[1].users[0].stu_prf_stud_name+"_____________hi");
    })
   }

  ngOnInit() {
  }

}
