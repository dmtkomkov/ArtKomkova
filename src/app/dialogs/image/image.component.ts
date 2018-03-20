import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  baseImageUrl: string = 'http://illustrators.ru/uploads/album_image/image/';

  constructor(
    public dialogRef: MatDialogRef<ImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'close',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/close.svg'));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
