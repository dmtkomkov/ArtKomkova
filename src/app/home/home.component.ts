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
        { 'name': 'Portraits', 'cover': '19918/0PmgzMwehFk.jpg' },
        { 'name': 'Watercolor', 'cover': '20365/6e5aF7HwsMU.jpg' },
        { 'name': 'Ballerina', 'cover': '22215/8.jpg' },
      ]
    );
  }
}
