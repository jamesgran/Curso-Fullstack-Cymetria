import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'angularProyect';
}
