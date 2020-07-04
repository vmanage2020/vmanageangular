import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  //templateUrl: './students.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
