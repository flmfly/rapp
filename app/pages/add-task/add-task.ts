import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';

/*
 Generated class for the AddTaskPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/add-task/add-task.html',
})
export class AddTaskPage {

    constructor(private nav:NavController) {

    }

    addReceiver() {
        this.nav.present(Modal.create(AddReceiverPage));
    }

    pushTask(){
        this.nav.pop();
    }
}

@Component({
    templateUrl: 'build/pages/add-task/add-receiver.html'
})
class AddReceiverPage {
    constructor(private platform:Platform,
                private params:NavParams,
                private viewCtrl:ViewController) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}