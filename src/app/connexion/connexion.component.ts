import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';






@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  users = [
    {
      "email": "fatima@fati.fr",
      "mdp": "1234"
    },
    {
      "email": "fred@fred.fr",
      "mdp": "123456"
    }
  ];

  connecte: boolean = false;

  messageErreur: string = "";

  connexion(event: Event) {
    event.preventDefault();

    const email : any = document.querySelector('#connexion[name="email"]');
    const mdp : any = document.querySelector('#connexion[name="mdp"]');

    this.users.forEach((user: any) => {
      if (user.mdp === mdp.value && user.email === email.value) {
        this.connecte = true;
      }
    });

    if (this.connecte) {
      localStorage.setItem('email', 'fatima@fati.fr');
      window.location.href = "/home";
    } else {
      this.messageErreur = "email or password incorrect";
    }
  }
}
