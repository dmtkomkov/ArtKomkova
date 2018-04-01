import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ApiService } from '../services/api/api.service';

import { environment } from '../../environments/environment';
import { RootFolderId } from '../consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly baseImageUrl: string = environment.baseImageUrl;
  collections: Array<any>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // looking for covers
    this.apiService.getFolderItems(RootFolderId)
      .subscribe(items => {
        for (let item of items) {
          console.log(item);
        }
      });

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
