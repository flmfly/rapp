import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

/*
 Generated class for the ResetMobilePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/reset-mobile/reset-mobile.html',
})
export class ResetMobilePage {

    private password:string;
    private mobile:string;
    private verifyCode:string;

    constructor(private nav:NavController) {

    }

    fetchVerifyCode() {
        let alert = Alert.create({
            title: '验证码已发送到手机：13888888888，请注意查收！',
            buttons: ['OK']
        });
        this.nav.present(alert);
    }

    fireRestMobile() {
        if (this.password !== '1' || this.mobile !== '1' || this.verifyCode !== '1') {
            let alert = Alert.create({
                title: '密码不正确||手机号不正确||短信验证码不正确',
                buttons: ['OK']
            });
            this.nav.present(alert);
        } else {
            let alert = Alert.create({
                title: '手机号码修改成功！',
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