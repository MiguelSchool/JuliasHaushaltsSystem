import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-impresum',
  templateUrl: './impresum.component.html',
  styleUrls: ['./impresum.component.scss']
})
export class ImpresumComponent {

  @Output() closeModal = new EventEmitter<boolean>()

  onModalClose() {
    this.closeModal.emit(false);
  }
}
