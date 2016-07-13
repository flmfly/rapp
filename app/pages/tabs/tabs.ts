import {Component, ViewChild} from '@angular/core'
import {Tabs, Alert, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {CalendarPage} from '../calendar/calendar';
import {PersonalPage} from '../personal/personal';
import {Session} from '../../providers/session/session'
import {LoginPage} from "../login/login";

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  private tab1Root: any;
  private contactRoot: any;
  private personalRoot: any;
  private calendarRoot: any;

  constructor(private nav:NavController, private session: Session) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.contactRoot = ContactPage;
    this.personalRoot = PersonalPage;
    this.calendarRoot = CalendarPage;

    // this.nav.remove(1);

    console.log(session.isLogin());

  }

  ionViewDidEnter(){
    this.session.setTabRef(this.tabRef);
  }
}
