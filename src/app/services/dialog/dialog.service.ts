import { ComponentRef, Injectable, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ImageComponent } from '../../dialogs/image/image.component';

import { ImageDialogData } from '../../interfaces';

@Injectable()
export class DialogService {
  private dialogRef: MatDialogRef<ImageComponent>;
  public dialogEvent: EventEmitter<string>;

  constructor(
    private dialog: MatDialog,
  ) {
    this.dialogEvent = new EventEmitter();
  }

  openDialog(component: any, data: ImageDialogData) {
    this.dialogRef = this.dialog.open(component, { data: data });
  }

  changeDialogData(data: any): void {
    this.dialogRef.componentInstance.data = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
