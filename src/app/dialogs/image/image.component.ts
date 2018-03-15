import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  constructor(
    public dialogRef: MatDialogRef<Image>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
}
