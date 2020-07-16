import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service'; 
@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss']
})
export class LoginviewComponent implements OnInit {

  constructor(private srvCart: UserserviceService) { }

  ngOnInit(): void {
    
  }

}
