import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   * Open link
   * @param {string} url
   * @method openLink
   * @public
   */
  public openLink(url: string): void {
    window.open(url, '_blank');
  }

}
