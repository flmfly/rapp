import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AttendanceCenterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/attendance-center/attendance-center.html',
})
export class AttendanceCenterPage {

  private daySelected: boolean = false;

  private selectedDay: string;

  constructor(private nav: NavController) {

  }

  selectDay(day: string){
    this.selectedDay = day;
    this.daySelected = true;
  }

}
