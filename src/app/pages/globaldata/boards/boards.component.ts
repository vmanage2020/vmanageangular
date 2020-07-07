import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  //templateUrl: './boards.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
