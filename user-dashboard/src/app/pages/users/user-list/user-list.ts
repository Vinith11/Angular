import { Component, WritableSignal } from '@angular/core';
import { UserService } from '../../../core/services/user';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterLink], 
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: true,
})
export class UserList {
  users: WritableSignal<User[]>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  
}
