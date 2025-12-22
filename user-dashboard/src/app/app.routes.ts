import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { UserList } from './pages/users/user-list/user-list';
import { UserDetail } from './pages/users/user-detail/user-detail';
import { UserForm } from './pages/users/user-form/user-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UserList },
  { path: 'users/new', component: UserForm },
  { path: 'users/:id', component: UserDetail },
];
