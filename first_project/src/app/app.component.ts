import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PremiercompoComponent } from './components/premiercompo/premiercompo.component';
import { DeuxiemeTrucComponent } from './components/deuxieme-truc/deuxieme-truc.component';
import { UserComponent } from './components/user/user.component';
import { AlertComponent } from './components/alert/alert.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { Tp1Component } from './components/tp1/tp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PremiercompoComponent, DeuxiemeTrucComponent, UserComponent, AlertComponent, ListUsersComponent, Tp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';
}
