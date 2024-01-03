import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {

  hidden:boolean = false;

  users:any[] = [
    {
      nom:"milito",
      prenom:"nathan",
      age:20,
    },
    {
      nom:"militot",
      prenom:"nathard",
      age:21,
    },
    {
      nom:"militrestot",
      prenom:"nathrestard",
      age:22,
    },
  ];

  toggleVisibility() {
    this.hidden = !this.hidden;
  }

}
