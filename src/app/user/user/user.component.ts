import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    spouseFirstName: '',
    spouseLastName: '',
    phoneNumber: ['', Validators.required],
    email: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
