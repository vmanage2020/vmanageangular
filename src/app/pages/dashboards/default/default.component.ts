import { Component, OnInit, ElementRef } from '@angular/core';

import { Widget, UserBalance, RevenueData, ChartType } from './default.model';
import { widgetData, salesMixedChart, revenueRadialChart, userBalanceData, revenueData } from './data';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})

/**
 * Dashboard-1 component: handling the dashboard-1 with sidebar and content
 */
export class DefaultDashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  widgetData: Widget[];
  userBalanceData: UserBalance[];
  revenueData: RevenueData[];
  salesMixedChart: ChartType;
  revenueRadialChart: ChartType;
  currentDate = new Date();

  studentCount:any;
  parentCount:any;
  teacherCount:any;
  staffCount:any;

  constructor(private eref: ElementRef,private http:HttpClient, private route: ActivatedRoute, private router: Router) { 
}

  ngOnInit() {

    
    let Metaurl='https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/dashboard';
    this.http.get<any>(Metaurl).toPromise().then(
      data => {
        console.log(data);
        this.studentCount = data.student;
        this.parentCount = data.parent;
        this.teacherCount = data.teacher;
        this.staffCount = data.staff;
      }
    ); 

  

    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Dashboard', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the dashboard value
   */
  private _fetchData() {

    this.widgetData = widgetData;
    this.salesMixedChart = salesMixedChart;
    this.revenueRadialChart = revenueRadialChart;
    this.userBalanceData = userBalanceData;
    this.revenueData = revenueData;
  }
}
