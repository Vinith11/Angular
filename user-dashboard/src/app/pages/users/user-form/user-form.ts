import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  userForm;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  this.userForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  }

  submit() {
    if (this.userForm.invalid) return;

    this.userService.addUser(this.userForm.getRawValue());
    this.router.navigate(['/users']);
  }
}