import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <!-- routerLinkActive (directive fournie par Router) ajoute la classe "active" lorsque la route choisie correspond à celle-ci -->
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    </nav>
        <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})

// component class : contrôle l'apparence et le comportement d'une vue au travers de son template
export class AppComponent {
  title = 'Tour of Heroes';
}
