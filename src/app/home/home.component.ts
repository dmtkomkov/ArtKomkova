import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collections: string[];

  constructor() { }

  ngOnInit() {
    this.getCollections().subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }

  getCollections(): string[] {
    return Observable.of(
      [
        { 'name': 'collection1', 'cover': '19913' },
        { 'name': 'collection2', 'cover': '19914' },
        { 'name': 'collection3', 'cover': '19915' },
        { 'name': 'collection4', 'cover': '19916' },
      ]
    );
  }
}
