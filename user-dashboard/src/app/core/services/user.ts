import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private usersSignal = signal<User[]>([
    { id: 1, name: 'Cistiano Ronaldo', email: 'cr7@goat.com' },
    { id: 2, name: 'Lionel Messi', email: 'ms10@goat.com' }
  ])

  getUsers() {
    return this.usersSignal;
  }
  
  getUserById(id: number): User | undefined {
    return this.usersSignal().find(user => user.id === id);
  }

  addUser(data: { name: string; email: string }) {
  const newUser = {
    id: Date.now(),
    name: data.name,
    email: data.email
  };

  this.usersSignal.update(users => [...users, newUser]);
}

}
