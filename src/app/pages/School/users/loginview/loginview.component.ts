import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service'; 
@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss']
})
export class LoginviewComponent implements OnInit {
  public data:any;  
  url:any;
  loginViewitems:any=[];
  constructor(private srvCart2: UserserviceService,private http:HttpClient,private route: ActivatedRoute) {
    
    this.url='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/loginuser/1';
    this.http.get<any>(this.url).toPromise().then(data => {
      const dt = data;
      if(dt['data']){
        this.loginViewitems=dt['data'];
        console.log(this.loginViewitems[0].users_name);
      }
    })
   }

  ngOnInit(): void {

  }

}
