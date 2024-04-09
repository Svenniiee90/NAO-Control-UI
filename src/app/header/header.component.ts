import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'NAO-Control-UI';
  volume = 80;
  charge = 92;

  volDown() {
    this.volume++;
  }

  volUp() {
    this.volume--;
  }

  stop() {
    alert("All Behaviors Stops!");
  }

  restart() {
    alert("NAO restarts!");
  }

  shutdown() {
    alert("NAO shutdown!");
  }
}
