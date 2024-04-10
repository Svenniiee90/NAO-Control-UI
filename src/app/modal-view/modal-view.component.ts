import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

function back() {
  alert("bakc")
}


@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.css'
})
export class ModalViewComponent {
  @Output() closeModal = new EventEmitter<string>();
  btns =  [
    {
      btnTitle: "Zurück",
      function: () => {this.closeModal.emit();}
    },
    {
      btnTitle: "Speichern",
      function: back
    },
    {
      btnTitle: "Weiter",
      function: back
    }
  ];


  close(){
    this.closeModal.emit();
  }
}
