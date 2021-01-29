import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interface/i-user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  validName = true;
  validAge = true;
  NewName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  NewAge = new FormControl('', [Validators.required, Validators.min(18)]);
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
    if (this.secondForm.valid) {
      const {name, age} = this.secondForm.value;
      this.user.name = name;
      this.user.age = age;
      this.NewName.patchValue('');
      this.NewAge.patchValue('');
      this.user.status = !this.user.status;
    }
    return;
  }

  ChangeInputValue(): void {
    if (this.NewName.invalid && this.secondForm.controls.name.value !== '') {
      this.validName = false;
    }
    if (this.NewAge.invalid && this.secondForm.controls.age.value !== '') {
      this.validAge = false;
    }
    return;
  }
}
