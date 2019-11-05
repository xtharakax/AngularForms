import {Component, OnInit} from '@angular/core';
import {UserSetting} from './data/user-setting';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  originalUserSettings: UserSetting = {
    name: 'Jone',
    specialOffers : false,
    interfaceStyle : 'dark',
    subscriptionType : 'Annual',
    notes : 'Sample Text'
};

  userSettings: UserSetting = {...this.originalUserSettings}

constructor()
{
}

ngOnInit()
{
}

  onSubmit(form: NgForm) {
    console.log(form.valid);
  }
}
