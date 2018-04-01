import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogService } from '../../services/dialog/dialog.service';

import { ImageDialogData } from '../../interfaces';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {

  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: ImageDialogData,
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
