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
  baseImageUrl: string = 'http://illustrators.ru/uploads/album_image/image/';

  constructor() { }

  ngOnInit() {
    this.getCollections().subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }

  getCollections(): Observable<any> {
    return Observable.of(
      [
        { 'name': 'collection1', 'cover': '19913/0PmgzMwehFk.jpg' },
        { 'name': 'collection2', 'cover': '19914/0PmgzMwehFk.jpg' },
        { 'name': 'collection3', 'cover': '19915/0PmgzMwehFk.jpg' },
        { 'name': 'collection4', 'cover': '19916/0PmgzMwehFk.jpg' },
      ]
    );
  }
}
