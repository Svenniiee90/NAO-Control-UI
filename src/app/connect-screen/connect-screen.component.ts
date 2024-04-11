import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-connect-screen',
  standalone: true,
  imports: [],
  templateUrl: './connect-screen.component.html',
  styleUrl: './connect-screen.component.css'
})
export class ConnectScreenComponent {
  @Output() reconnect = new EventEmitter<string>();
  msg = 'Verbindung mit NAO herstellen...'
  btnTitle = 'nochmal versuchen'
}
