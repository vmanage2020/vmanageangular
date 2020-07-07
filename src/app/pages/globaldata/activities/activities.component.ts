import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  //templateUrl: './activities.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
