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
  collection: Array<string>;
  baseImageUrl: string = 'http://illustrators.ru/uploads/album_image/image/';
  selectedImage: string = null;

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

    this.dialogService.dialogEvent.subscribe(res => {
      if (this.selectedImage == null) {
        return
      }
      if (res == null) {
        this.selectedImage = null;
        return
      }
      let idx: number = this.collection.indexOf(this.selectedImage);
      idx = this.getNextIndex(idx, this.collection.length, res);
      this.selectedImage = this.collection[idx];
      this.dialogService.changeDialogData({
        image: this.selectedImage,
        imageIndex: idx,
        collectionLength: this.collection.length,
      });
    });
  }

  private getNextIndex(idx: number, len: number, direction: 'prev'|'next'): number {
    if (direction == 'prev') return idx == 0? len - 1: idx - 1;
    if (direction == 'next') return len == idx + 1? 0: idx + 1;
  }

  showImage(image) {
    this.selectedImage = image;
    this.dialogService.openDialog(ImageComponent, {
      image: this.selectedImage,
      imageIndex: this.collection.indexOf(this.selectedImage),
      collectionLength: this.collection.length,
    });
  }
}
