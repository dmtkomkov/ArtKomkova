import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly email: string = 'alena.komv@gmail.com';
  readonly icons = [
    'color-lens',
    'close',
    'arrow-left',
    'arrow-right',
    'contact-email',
  ]

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {  }

  ngOnInit() {
    for (let icon of this.icons) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          'assets/img/' + icon + '.svg'
        )
      );
    }
  }

  openEmail() {
    window.open('mailto:' + this.email, '_self');
  }
}
