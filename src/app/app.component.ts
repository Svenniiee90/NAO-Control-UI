import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {FunctionViewComponent} from "./function-view/function-view.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, HeaderComponent, FunctionViewComponent, SideBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NAO-Control-UI';
  editOn = false;

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
      config: true
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
}
