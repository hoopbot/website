import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  /**
   * Open link
   * @param {string} url
   * @method openLink
   * @public
   */
  public openLink(url: string, blank?: boolean): void {
    if (blank === false) {
      window.open(url, '_self');
    } else {
      window.open(url, '_blank');
    }
  }

}
