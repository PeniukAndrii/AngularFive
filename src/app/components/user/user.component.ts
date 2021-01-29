import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interface/i-user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  NewName = new FormControl();
  NewAge = new FormControl();
  secondForm = new FormGroup({
    name: this.NewName,
    age: this.NewAge
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  showInput(): void {
    this.user.status = !this.user.status;
  }

  setNewUser(): void {
    const {name, age} = this.secondForm.value;
    this.user.name = name;
    this.user.age = age;
  }
}
