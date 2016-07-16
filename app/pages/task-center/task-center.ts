import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddTaskPage} from '../add-task/add-task';
import {Task} from '../../model/task';
/*
 Generated class for the TaskCenterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/task-center/task-center.html',
})
export class TaskCenterPage {

    private category:string = '1';

    private mine:Task[] = [{
        title: '休假-年假',
        from: 'Jimmy Wang',
        to: 'Charles',
        createTime: '06-11 7:00',
        startTime: '06-11 8:00',
        endTime: '06-11 12:00'
    }];

    private tome:Task[] = [{
        title: '门店调研',
        from: 'Connie',
        to: 'Jimmy Wang',
        createTime: '06-12 7:00',
        startTime: '06-18 14:00',
        endTime: '06-18 17:00'
    }];

    constructor(private nav:NavController) {

    }

    nav2AddTask() {
        this.nav.push(AddTaskPage);
    }
}
