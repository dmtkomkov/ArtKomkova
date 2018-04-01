import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ApiService } from '../services/api/api.service';

import { environment } from '../../environments/environment';
import { RootFolderId, DISK_FOLDER_TYPE, DISK_IMAGE_TYPE } from '../consts';
import { Album } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly baseImageUrl: string = environment.baseImageUrl;
  collections: Array<any>;
  albums: Array<Album> = new Array();

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // looking for covers
    this.apiService.getFolderItems(RootFolderId)
      .subscribe(items => {
        // Group items by folder and file names
        // {name:  {memType<file>: item<file>, mimeType<folder>: item<folder>}}
        let albumItems = {};
        for (let item of items) {
          let name: string;
          if (item.mimeType == DISK_FOLDER_TYPE) name = item.name;
          else name = item.name.split('.')[0];

          if !(name in albumItems) albumItems[name] = {};
          albumItems[name][item.mimeType] = item;
        }

        // Convert item groups to album
        for (let name in albumItems) {
          let itemTypes = albumItems[name];
          if (!!itemTypes[DISK_FOLDER_TYPE] && !!itemTypes[DISK_IMAGE_TYPE]) {
            this.albums.push({
              name: name,
              id: itemTypes[DISK_FOLDER_TYPE].id,
              coverUrl: itemTypes[DISK_IMAGE_TYPE].webContentLink,
            });
          }
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
