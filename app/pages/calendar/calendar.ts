import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TaskDetailPage} from '../task-detail/task-detail';

/*
  Generated class for the CalendarPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/calendar/calendar.html',
})
export class CalendarPage {

  private dayOfWeek: string = '0';

  constructor(private nav: NavController) {

  }

  nav2TaskDetail() {
    this.nav.push(TaskDetailPage);
  }
}
