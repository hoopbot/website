import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ToggleSideMenuService {
  // Behaviour subject
  private _sideMenuIsOpen: BehaviorSubject<boolean>;

  /**
   * Constructor
   */
  constructor() {
    this._sideMenuIsOpen = new BehaviorSubject(false);
  }

  /**
   * Toggle side menu
   */
  public toggleSideMenu() {
    if (this._sideMenuIsOpen.getValue() === true) {
      this._sideMenuIsOpen.next(false);
    } else {
      this._sideMenuIsOpen.next(true);
    }
  }

  /**
   * Getter for sideMenuIsOpen boolean
   * @returns {BehaviorSubject<boolean>}
   */
  get sideMenuIsOpen(): BehaviorSubject<boolean> {
    return this._sideMenuIsOpen;
  }

}
