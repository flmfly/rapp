import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {ResetMobilePage} from '../reset-mobile/reset-mobile';
import {ResetPasswordPage} from '../reset-password/reset-password';
import {Session} from '../../providers/session/session'
import {LoginPage} from "../login/login";

/*
 Generated class for the ProfilePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

    constructor(private nav:NavController, private session: Session) {

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

    logout() {
        this.nav.present(Alert.create({
            subTitle: '您确定要退出吗？',
            buttons: [{
                text: 'OK',
                handler: () => {
                    // this.session.setLogin(false);
                    setTimeout(() => this.session.loginNavController.popToRoot(), 400);
                    // this.session.loginNavController.pop();
                }
            }, {
                text: 'Cancel',
                handler: () => {

                }
            }]
        }));
    }
}
