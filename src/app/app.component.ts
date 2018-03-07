import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {  }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'color-lens',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/color_lens.svg'));
  }
}
