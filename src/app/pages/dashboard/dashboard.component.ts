import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  jobData = [];
  staticData = [];
  foundJob = [];
  link = [];
  alljob = [];
  dataset = [];
  constructor(private ujs: DashboardService) { }

  ngOnInit() {
    this.onUpdateServer();
    this.ujs.connectFirebase().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    this.ujs.connectFirebase2().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    // this.ujs.connectFirebase3().then(
    //   (data) => {
    //     this.jobData = data;
    //   }
    // );
    
    this.ujs.connectFirebase4().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    this.ujs.connectFirebase5().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    this.ujs.connectFirebase6().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    this.ujs.connectFirebase7().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    this.ujs.connectFirebase8().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
        
      }
    );

    this.ujs.connectFirebase9().then(
      (data) => {
        this.dataset.push(data);
        this.jobData = this.dataset;
      }
    );

    // this.ujs.connectFirebase10().then(
    //   (data) => {
    //     this.jobData = data;
    //   }
    // );
  }

  // ngAfterViewInit() {
  //   this.foundJob = [];
  //   const xx = Observable.fromEvent(document.getElementById('input'), 'keyup')
  //             .debounceTime(500).distinctUntilChanged().subscribe(
  //               (foundJob: any) => {
  //                 if(foundJob.target.value.length > 1){
  //                   this.foundJob = [];
  //                   this.jobData.forEach(job => {
  //                     job.forEach(subJob => {
  //                       subJob.data.forEach(element => {
  //                       if (subJob.includes(foundJob.target.value)) {
  //                         const temp = subJob.split(';');
  //                         this.foundJob.push({"name":temp[0],"web": temp[1]});
  //                       }
  //                     });
  //                   });
  //                 });
  //                 }else{
  //                   this.foundJob = [];
  //                 }
  //                 console.log(this.foundJob);
                  
  //               }
  //             );
  // }
  
  onUpdateServer() {
    this.ujs.setData();
  }



  onSearch(keyWord) {
    this.foundJob = [];
    this.link = [];
    this.jobData.forEach(job => {
      job.forEach(subJob => {
        subJob.data.forEach(element => {
          if (element.includes(keyWord.value)) {
            const temp = element.split(';');
            this.foundJob.push({"name":temp[0],"web": temp[1]});
          }
        });
      });
    });
  }
}
