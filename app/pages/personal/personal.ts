import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {VacationListPage} from '../vacation-list/vacation-list';

/*
 Generated class for the PersonalPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/personal/personal.html',
})
export class PersonalPage {

    constructor(private nav:NavController) {

    }

    enterProfilePage() {
        this.nav.rootNav.push(ProfilePage);
    }

    nav2VacationList(){
        this.nav.rootNav.push(VacationListPage);
    }
}
