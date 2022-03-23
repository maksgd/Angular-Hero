import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

export interface ISkills {
  name: string;
}


@Component({
  selector: 'app-form-component',
  template: `
  <!-- Form -->
  
  <form [formGroup]="formAllInfo" class="form" (submit)="onSub()">
    <div class="container">

      <div class="example-container">

        <mat-form-field class="mt-30" appearance="fill">
          <mat-label>Фамилия</mat-label>
          <input matInput placeholder="Иванов" formControlName="lastName" required>
          <div class="error" *ngIf="isControlInvalid('lastName')">Фамилия должна состоять только из русских букв</div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Имя</mat-label>
          <input matInput placeholder="Иван" formControlName="firstName" required>
          <div class="error" *ngIf="isControlInvalid('firstName')">Имя должно состоять только из русских букв</div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Отчество</mat-label>
          <input matInput placeholder="Иванович" formControlName="middleName">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput placeholder="pat@example.com" formControlName="email" >
        </mat-form-field>

        <!-- Chips -->
        <mat-form-field formArrayName="aliases" class="example-chip-list" appearance="fill">
          <mat-label>Умения</mat-label>
          <mat-chip-list #chipList aria-label="skill selection">
            <mat-chip *ngFor="let skill of skills" (removed)="remove(skill)">
              {{skill.name}}
              <button matChipRemove>
                <mat-icon>cancel</mat-icon>
              </button>
            </mat-chip>
            <input placeholder="Больше умений..."
                  [matChipInputFor]="chipList"
                  [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                  [matChipInputAddOnBlur]="addOnBlur"
                  (matChipInputTokenEnd)="add($event)">
          </mat-chip-list>
        </mat-form-field>

        <div class="container-btn">
        <button class="btn mr-30" mat-raised-button color="primary" (click)="onSub()" [disabled]="!formAllInfo.valid" >Отправить</button>
        <button class="btn" mat-raised-button color="warn" (click)="onClear()" >Отчистить</button>
        </div>
      </div>

      <div *ngIf="displayInfo" class="more__info">
        {{ formAllInfo.value | json }} 
      </div>

    </div>
  </form>
  <!-- /Form -->
  `,

  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {

  displayInfo: boolean = false

  formAllInfo: FormGroup

  constructor(private fb: FormBuilder) {

    this.formAllInfo = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      firstName: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      middleName: ['', [Validators.pattern(/[А-я]/)]],
      email: ['', [Validators.email]],
  
      aliases: this.fb.array([])
    })
  }

  get aliases() {
    return this.formAllInfo.get('aliases') as FormArray;
  }

  // ===== Chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: ISkills[] = [{name: 'жизнерадостность'}, {name: 'заинтересованность'}, {name: 'интеллект'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our skill
    if (value) {
      this.aliases.push(this.fb.control(`${event.value}`))
      this.skills.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: ISkills): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
      this.aliases.removeAt(index-3);
    }
  }
  // ===== /Chips

  ngOnInit() {}

  isControlInvalid(controlName: string): boolean {
    const control = this.formAllInfo.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSub() {
    this.displayInfo = true
  }

  onClear() {
    this.displayInfo = false
    this.formAllInfo.reset()
  }

}
