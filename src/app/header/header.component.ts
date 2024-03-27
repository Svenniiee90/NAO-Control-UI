import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
