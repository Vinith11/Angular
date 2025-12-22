import { Component } from '@angular/core';
import { User } from '../../../core/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
  }
}
