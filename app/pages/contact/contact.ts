import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessagePage} from "../message/message";

@Component({
    templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
    constructor(private nav:NavController) {
    }

    nav2Message() {
        this.nav.rootNav.push(MessagePage);
    }
}
