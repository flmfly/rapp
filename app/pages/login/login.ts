import { Component } from '@angular/core';
import { Alert, NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  private username: string;
  private password: string;

  constructor(private nav: NavController) {

  }

  login(){
    if(this.username !== '1' || this.password !== '1'){
      let alert = Alert.create({
        title: '用户名或者密码错误！',
        buttons: ['OK']
      });
      this.nav.present(alert);
    }else{
      this.nav.push(TabsPage);
    }
  }
}
