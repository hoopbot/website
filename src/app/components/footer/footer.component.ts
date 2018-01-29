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
  public openLink(url: string): void {
    window.open(url, '_blank');
  }

}
