import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'site-header',
  standalone: true,
  imports: [MatToolbar, MatIcon],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {

  title: string = "UC Climbing Team" // TODO: Move magic string to a runtime config.

  @Output() onNavMenuIconClicked = new EventEmitter<void>();

  navMenuClicked() {
    this.onNavMenuIconClicked.next();
  }
}
