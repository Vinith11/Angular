import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <!-- <!-- <h1>Welcome to {{title}}!</h1> -->
    <!-- <p> This first step</p> -->
    <!-- <router-outlet /> -->

    <app-header/>
    <main>
      <app-home/>
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
    }
  `],
})
export class AppComponent {
  title = 'first-ng-app';
}
