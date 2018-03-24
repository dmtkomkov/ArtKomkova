import { Injectable, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  private dialogRef: MatDialogRef;
  public dialogEvent: EventEmitter<string>;

  constructor(
    private dialog: MatDialog;
  ) {
    this.dialogEvent = new EventEmitter();
  }

  openDialog(component: any, data: any) {
    this.dialogRef = this.dialog.open(component, { data: data });
  }

  changeDialogData(data: any): void {
    this.dialogRef.componentInstance.data = data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
