import { Component, OnInit } from '@angular/core';
import { UiFeaturesService } from './ui-features.service';

@Component({
  selector: 'ui-features',
  templateUrl: './ui-features.component.html',
  styleUrls: ['./ui-features.component.scss']
})
export class UiFeaturesComponent implements OnInit {

  constructor(private ujs: UiFeaturesService) { }
  jobData = [];
  staticData = [];
  foundJob = [];
  link = [];

  ngOnInit() {
    this.onUpdateServer();
    this.ujs.connectFirebase().then(
      (data) => {
        this.jobData = data;
        this.jobData.forEach(ee => {
          this.staticData.push(ee.name);
        });
      }
    );
  }

  onUpdateServer() {
    this.ujs.setData();
  }

  onSearch(keyword) {
    this.foundJob = [];
    this.link = [];
    this.jobData.forEach(ee => {
      if(keyword == ee.name){
        ee.data.forEach(ww => {
          const temp = ww.split(';');
          this.foundJob.push(temp[0]);
          this.link.push(temp[1]);
        });
      }
    });
  }
}
