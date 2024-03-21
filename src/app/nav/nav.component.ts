import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {

  constructor(){}
  
  public flechaClass: string = "bi bi-caret-down-fill";
  public menuColapso: boolean = true;

  public changeFlecha():void {
    if (this.flechaClass === "bi bi-caret-down-fill") {
      this.flechaClass = "bi bi-caret-up-fill";
    }else {
      this.flechaClass = "bi bi-caret-down-fill";
    }
  }

  public collapseElements(): void {
    let elementToColapse = document.getElementById("collapsePartners");
    if(elementToColapse?.classList.contains("show")) {
      elementToColapse.classList.remove("show");
      this.changeFlecha();
    }

    this.setMenuColapso()
  }

  public collapseElementsMenuClick(): void {
    let elementToColapse = document.getElementById("navbarSupportedContent");
    if(elementToColapse?.classList.contains("show")) {
      elementToColapse.classList.remove("show");
    }
    this.setMenuColapso()
  }

  public setMenuColapso(): void {
    this.menuColapso = !this.menuColapso;
  }
}

