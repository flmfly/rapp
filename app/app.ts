import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {PersonalPage} from './pages/personal/personal';
import {LoginPage} from './pages/login/login';
import {Session} from './providers/session/session';

@Component({
    template: '<ion-nav [root]="rootPage" swipBackEnabled="false"></ion-nav>',
    providers: [Session]
})
export class MyApp {

    private rootPage:any;

    constructor(private platform:Platform) {
        // this.rootPage = TabsPage;
        this.rootPage = LoginPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp, null, {
    mode: 'ios',
    backButtonText: '',
    iconMode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabbarPlacement: 'bottom',
    pageTransition: 'ios',
});