/**
 * Core Angular modules
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

/**
 * Components
 */
import {SideMenuComponent} from './components/side-menu/side-menu.component';

/**
 * Pages
 */
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {HowToPlayComponent} from './pages/how-to-play/how-to-play.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';

/**
 * Side menu service
 */
import {ToggleSideMenuService} from './services/toggle-side-menu/toggle-side-menu.service';

/**
 * App routes
 * @type {[{path: string; component: WelcomeComponent} , {path: string; component: HowToPlayComponent} , {path: string; component: PrivacyPolicyComponent} , {path: string; component: AboutUsComponent}]}
 */
const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'about-us', component: AboutUsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PrivacyPolicyComponent,
    SideMenuComponent,
    HowToPlayComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ToggleSideMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
