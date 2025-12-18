import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDisabled = true;

  handleClick() {
    console.log('Button clicked');
  }
  username = '';
  loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  users = ['Vinith', 'Amit', 'Neha'];
}


