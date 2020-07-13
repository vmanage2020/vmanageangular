import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  //templateUrl: './global.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
