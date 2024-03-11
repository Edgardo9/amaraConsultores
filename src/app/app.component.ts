import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            NavComponent,
            HomeComponent,
            FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amara Consultores';
  listProds = ["Soluciones de control de inventario de hardware y software", "Soluciones de mesa de servicios certificadas bajo ITILv4", "Soluciones de Backup"];
  listServs = ["Consultoría ITIL", "Soluciones ITSM e ITAM", "Servicios administrados"];
}
