import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {FunctionViewComponent} from "./function-view/function-view.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {ModalViewComponent} from "./modal-view/modal-view.component";
import {ConnectScreenComponent} from "./connect-screen/connect-screen.component";
import {interval, take, timeout} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, HeaderComponent, FunctionViewComponent, SideBarComponent, FooterComponent, ModalViewComponent, NgIf, ConnectScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'NAO-Control-UI';
  editOn = false;
  modalOpen = false;
  connected = false;
  connectionTimeout = false;
  ngOnInit(): void {
    const subscription = interval(500)
      .pipe()
      .subscribe(x => console.log('Next: ', x));
    setTimeout(()=> {subscription.unsubscribe();}, 12350)

  }
  changeEditOn() {
    if(this.editOn) {
      this.editOn = false;
    } else {
      this.editOn = true;
    }
  }
  hello () {
    alert("Hallo Sven")
  }

  buttonCol1 = [
    {
      title: 'Begrüssung',
      path: '/test/behavior_1',
      editable: false,
      config: true,
      col: 2
    },
    {
      title: 'ChatGPT fragen',
      path: '/test/behavior_1',
      editable: false,
      config: true,
      col: 2
    },
    {
      title: 'ChatGPT fragen',
      path: '/test/behavior_1',
      editable: false,
      config: true,
      col: 2
    },
    {
      title: 'ChatGPT fragen',
      path: '/test/behavior_1',
      editable: false,
      config: true,
      col: 2
    }
  ];
  private numbers: any;


  closeModal() {
    this.modalOpen = false;
  }
  openModal() {
    this.modalOpen = true;
  }

  reconnect() {
    this.connected = true;
    alert("connected")
  }


}
