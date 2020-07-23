import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  //templateUrl: './staff.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
