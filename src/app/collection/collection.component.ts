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
      let idx: number = this.collection.indexOf(this.selectedImage);
      let prevIdx = idx==0? this.collection.length-1:idx-1
      let nextIdx = this.collection.length==idx+1? 0:idx+1
      if (res == 'prev') this.selectedImage = this.collection[prevIdx]
      else if (res == 'next') this.selectedImage = this.collection[nextIdx]
      else if (res == null) this.selectedImage = null
      this.dialogService.changeDialogData({ image: this.selectedImage })
    });
  }

  showImage(image) {
    this.selectedImage = image;
    this.dialogService.openDialog(ImageComponent, { image: this.selectedImage });
    //this.dialogService.changeDialogData({ image : '19921/0PmgzMwehFk.jpg' })
  }
}
