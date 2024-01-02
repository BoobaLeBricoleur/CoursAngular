import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  //attributs

  nom:String = "Milito";
  prenom:String = "Nathan";
  age:number = 20;
  genre:String = "";

  //méthodes

  incrementAge():void {
    //ajouter 1 à l'âge
    this.age+=1;
  };

decrementAge = () => {
  //enlever 1 à l'âge
  this.age -=1;
};

}