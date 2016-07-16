import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AttendanceCenterPage} from '../attendance-center/attendance-center';

/*
 Generated class for the AttendancePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/attendance/attendance.html',
})
export class AttendancePage {

    constructor(private nav:NavController) {

    }

    nav2AttendanceCenter() {
        this.nav.push(AttendanceCenterPage);
    }

}
