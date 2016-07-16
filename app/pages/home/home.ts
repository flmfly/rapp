import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TaskCenterPage} from '../task-center/task-center';
import {AttendancePage} from '../attendance/attendance';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(private nav:NavController) {

    }

    nav2TaskCenter() {
        this.nav.rootNav.push(TaskCenterPage);
    }

    nav2Attendance(){
        this.nav.rootNav.push(AttendancePage);
    }
}
