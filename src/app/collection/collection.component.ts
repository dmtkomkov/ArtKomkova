import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { collections } from './collection.consts';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  collection: any;
  baseImageUrl: string = 'http://illustrators.ru/uploads/album_image/image/';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['name'])
      .subscribe(name => {
        this.collection = collections[name];
      );
  }
}
