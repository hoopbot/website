import {Component} from '@angular/core';
import {ToggleSideMenuService} from './services/toggle-side-menu/toggle-side-menu.service';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Side menu is open?
  sideMenuIsOpen: boolean;

  /**
   * Constructor
   * @param {ToggleSideMenuService} _toggleSideMenuService
   */
  constructor(@Inject(ToggleSideMenuService) private _toggleSideMenuService: ToggleSideMenuService) {
    // Subscribe to side menu toggle service
    this._subscribeToToggle();
  }

  /**
   * Subscribe to sideMenuToggle
   * @private
   */
  private _subscribeToToggle() {
    this._toggleSideMenuService.sideMenuIsOpen.subscribe(sideMenuIsOpen => {
      this.sideMenuIsOpen = sideMenuIsOpen;
    });
  }

  /**
   * Toggle side menu
   */
  toggleSideMenu() {
    this._toggleSideMenuService.toggleSideMenu();
  }
}
