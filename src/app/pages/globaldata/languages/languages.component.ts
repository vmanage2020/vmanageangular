import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  //templateUrl: './languages.component.html',
  template:`
  <!-- Alert -->
  <div *ngFor="let alert of alertMessages">
  <div class="alert alert-{{alert.type}} fade show alert-fixed" role="alert">{{ alert.msg }}</div>
  </div>
  <!-- Alert -->
  <router-outlet></router-outlet>`,
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
