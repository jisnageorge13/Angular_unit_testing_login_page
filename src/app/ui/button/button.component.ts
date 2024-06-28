import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = '';
  // @Output() onClicking: EventEmitter<void> = new EventEmitter<void>();

  // handleClick(): void {
  //   this.onClicking.emit();
  // }
}
