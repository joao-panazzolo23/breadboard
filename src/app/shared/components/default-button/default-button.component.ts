import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonLabels, ButtonTypes} from '../../enums/buttons.enum';

@Component({
  selector: 'app-default-button',
  imports: [],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent implements OnInit {
  // userRoleLabel = UserRoleLabel
  @Input() ButtonType: ButtonTypes = ButtonTypes.Confirm;
  @Input() Text: string | null = null;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  // labels = Object.entries(ButtonLabels)
  // @Input(require()) icon: string;

  ngOnInit(): void {
    console.log(this.ButtonType)
    if (!this.Text) {
      this.Text = ButtonLabels[this.ButtonType];
    }
  }
}


