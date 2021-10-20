import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  formGroup: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.maxLength(50)]],
    married: false,
    spouseFirstName: '',
    spouseLastName: '',
    phoneNumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ],
    email: [''],
  });

  subscriptions = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.formGroup
        .get('married')
        ?.valueChanges.pipe(
          tap((married) => {
            if (married) {
              this.formGroup
                .get('spouseFirstName')
                ?.setValidators([
                  Validators.required,
                  Validators.maxLength(50),
                ]);
              this.formGroup
                .get('spouseLastName')
                ?.setValidators([
                  Validators.required,
                  Validators.maxLength(50),
                ]);
            } else {
              this.formGroup.get('spouseFirstName')?.clearValidators();
              this.formGroup.get('spouseLastName')?.clearValidators();
            }
            this.formGroup.get('spouseFirstName')?.updateValueAndValidity();
            this.formGroup.get('spouseLastName')?.updateValueAndValidity();
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
