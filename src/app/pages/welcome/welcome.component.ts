import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Open Google Play store link
   */
  openAndroid() {
    window.open('https://play.google.com/store/apps/details?id=neverland.hoopbot');
  }

  /**
   * Open iOS App store link
   */
  openiOS() {
    window.open('https://itunes.apple.com/us/app/hoopbot/id1313728649');
  }

}
