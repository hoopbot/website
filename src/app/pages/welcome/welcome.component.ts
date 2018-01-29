import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  /**
   * Open Google Play store link
   * @method openAndroid
   * @public
   */
  public openAndroid() {
    window.open('https://play.google.com/store/apps/details?id=neverland.hoopbot');
  }

  /**
   * Open iOS App store link
   * @method openiOS
   * @public
   */
  public openiOS() {
    window.open('https://itunes.apple.com/us/app/hoopbot/id1313728649');
  }

}
