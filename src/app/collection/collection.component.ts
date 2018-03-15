import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/map';
import { ImageComponent } from '../dialogs/image/image.component';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['name'])
      .subscribe(name => {
        this.collection = collections[name];
      });
  }

  showImage(image) {
    let dialogRef = this.dialog.open(ImageComponent, {
      width: '250px',
      data: { name: 'Dima' }
    });
  }
}
