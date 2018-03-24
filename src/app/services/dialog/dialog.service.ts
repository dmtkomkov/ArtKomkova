import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  public dialogRef: MatDialogRef;

  constructor(
    private dialog: MatDialog;
  ) { }

  openDialog(component: any, data: any) {
    this.dialogRef = this.dialog.open(component, { data: data });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  showPrevImage(): void {
    console.log('Prev Image');
  }

  showNextImage(): void {
    console.log('Next Image');
  }

}
