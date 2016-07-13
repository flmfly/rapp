import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {ResetMobilePage} from '../reset-mobile/reset-mobile';
import {ResetPasswordPage} from '../reset-password/reset-password';

/*
 Generated class for the ProfilePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

    constructor(private nav:NavController) {

    }

    nav2ResetMobile() {
        this.nav.push(ResetMobilePage);
    }

    nav2ResetPassword() {
        this.nav.push(ResetPasswordPage);
    }

    NIY() {
        this.nav.present(Alert.create({title: 'NIY', buttons: ['OK']}));
    }
}
