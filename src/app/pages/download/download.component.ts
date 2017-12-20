import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
    const agent = this._getOS();
    if (agent === 'ios') {
      window.location.href = 'https://itunes.apple.com/us/app/hoopbot/id1313728649';
    } else if (agent === 'android') {
      window.location.href = 'https://play.google.com/store/apps/details?id=neverland.hoopbot&hl=en';
    } else {
      this._router.navigate(['./']);
    }
  }

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   * @method _getOS
   * @private
   * @returns {String}
   */
  private _getOS(): string {
    const _window: any = window;
    const userAgent = navigator.userAgent || navigator.vendor || _window.opera;

    // Windows Phone must come first because its UA also contains 'Android'
    if (/windows phone/i.test(userAgent)) {
      return 'windows';
    }

    if (/android/i.test(userAgent)) {
      return 'android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !_window.MSStream) {
      return 'ios';
    }

    return 'unknown';
  }

}
