import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Session} from '../../providers/session/session';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

    private username:string;
    private password:string;

    constructor(private nav:NavController, private session:Session) {
        this.session.loginNavController = nav;
    }

    login() {
        if (this.username !== '1' || this.password !== '1') {
            let alert = Alert.create({
                subTitle: '用户名或者密码错误！',
                buttons: ['OK']
            });
            this.nav.present(alert);
        } else {
            this.session.setLogin(true);
            this.nav.push(TabsPage);
            this.resetData();
        }
    }

    private resetData(){
        this.username = '';
        this.password = '';
    }
}
