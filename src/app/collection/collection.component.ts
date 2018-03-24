import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { ImageComponent } from '../dialogs/image/image.component';

import { collections } from './collection.consts';

import { DialogService } from '../services/dialog/dialog.service';

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
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['name'])
      .subscribe(name => {
        this.collection = collections[name];
      });
  }

  showImage(image) {
    this.dialogService.openDialog(ImageComponent, { image: image });
  }
}
