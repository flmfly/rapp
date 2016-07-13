import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

/*
 Generated class for the ResetPasswordPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/reset-password/reset-password.html',
})
export class ResetPasswordPage {

    private password:string;
    private newPassword:string;
    private newPassword1:string;

    constructor(private nav:NavController) {

    }

    fireRestPassword() {
        if (this.newPassword !== this.newPassword1) {
            let alert = Alert.create({
                title: '两次输入的新密码不一致！',
                buttons: ['OK']
            });
            this.nav.present(alert);
        } else if (this.password !== '1' || this.newPassword !== '1' || this.newPassword1 !== '1') {
            let alert = Alert.create({
                title: '密码不正确！',
                buttons: ['OK']
            });
            this.nav.present(alert);
        } else {
            let alert = Alert.create({
                title: '密码修改成功！',
                buttons: [{
                    text: 'OK', handler: data => {
                        setTimeout(()=> this.nav.pop(), 500);
                    }
                }]
            });
            this.nav.present(alert);
        }
    }

}
