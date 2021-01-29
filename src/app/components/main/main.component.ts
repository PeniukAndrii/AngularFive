import {Component, OnInit} from '@angular/core';
import {user} from '../../db/db';
import {IUser} from '../../interface/i-user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /*name = '';
  age = '';*/
  users: IUser[] = user;

  name = new FormControl();
  age = new FormControl();
  mainForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  constructor() {
  }

  ngOnInit(): void {

  }

  /*formSub(ngForm): void {
    user.push({name: ngForm.value.name, age: ngForm.value.age});
  }*/

  formGroupSub(): void {
    user.push({name: this.mainForm.value.name, age: this.mainForm.value.age});
  }
}
