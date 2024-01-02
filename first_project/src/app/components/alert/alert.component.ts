import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  //attributs

  messAlert:String = "";

  //méthodes

  alerter():void {
    //afficher l'alerte
    alert(this.messAlert);
  };

}
