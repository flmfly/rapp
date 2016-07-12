import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {CalendarPage} from '../calendar/calendar';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private contactRoot: any;
  private tab3Root: any;
  private calendarRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.contactRoot = ContactPage;
    this.tab3Root = AboutPage;

    this.calendarRoot = CalendarPage;
  }
}
