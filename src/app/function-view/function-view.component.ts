import { Component,Input } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-function-view',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './function-view.component.html',
  styleUrl: './function-view.component.css'
})
export class FunctionViewComponent {
  @Input() editOn = false;
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
      editable: true,
      config: false,
      col: 2
    },
    {
      title: 'ChatGPT fragen',
      path: '/test/behavior_1',
      editable: true,
      config: false,
      col: 2
    }
  ];
}
