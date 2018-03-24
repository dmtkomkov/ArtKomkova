import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  baseImageUrl: string = 'http://illustrators.ru/uploads/album_image/image/';

  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  closeImage(): void {
    this.dialogService.closeDialog();
    this.dialogService.dialogEvent.emit(null);
  }

  showPrevImage(): void {
    this.dialogService.dialogEvent.emit("prev");
  }

  showNextImage(): void {
    this.dialogService.dialogEvent.emit("next");
  }
}
