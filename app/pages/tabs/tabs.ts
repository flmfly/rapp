import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {CalendarPage} from '../calendar/calendar';
import {PersonalPage} from '../personal/personal';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private contactRoot: any;
  private personalRoot: any;
  private calendarRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.contactRoot = ContactPage;
    this.personalRoot = PersonalPage;
    this.calendarRoot = CalendarPage;
  }
}
