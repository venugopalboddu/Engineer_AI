import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata: any;
  emplye: any;
  searchText;
  hits;
  set: any;
  subscription: Subscription;
  constructor(private ht: HttpClient, private s: DataService, ) { }

  ngOnInit() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.s.ge())
    ).subscribe(resp => {
      console.log(resp)
      this.fdata = resp['hits'];
    });
  }


  openModa(fdata) {
    console.log(fdata);
    this.emplye = fdata;
    this.s.po(fdata).subscribe(res => console.log(res));

  }
}

