import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { ImageComponent } from '../dialogs/image/image.component';

import { DialogService } from '../services/dialog/dialog.service';
import { ApiService } from '../services/api/api.service';

import { DISK_IMAGE_TYPE } from '../consts';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  images: Array<string>;
  selectedImage: string = null;

  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.map(params => params['name']).subscribe(name => {
      this.apiService.getFolderItems(name, DISK_IMAGE_TYPE).subscribe(items => {
        this.images = items.map(item => item.webContentLink);
      });
    });

    this.dialogService.dialogEvent.subscribe(res => {
      if (this.selectedImage == null) {
        return
      }
      if (res == null) {
        this.selectedImage = null;
        return
      }
      let idx: number = this.images.indexOf(this.selectedImage);
      idx = this.getNextIndex(idx, this.images.length, res);
      this.selectedImage = this.images[idx];
      this.dialogService.changeDialogData({
        image: this.selectedImage,
        imageIndex: idx,
        collectionLength: this.images.length,
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
      imageIndex: this.images.indexOf(this.selectedImage),
      collectionLength: this.images.length,
    });
  }
}
