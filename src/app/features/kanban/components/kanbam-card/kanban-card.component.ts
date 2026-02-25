import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanbanCard} from '../../interfaces/kanban.card.interface';


@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl:  './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss',
})
export class KanbanCardComponent {
  @Input() card!: KanbanCard;
  @Output() cardAction = new EventEmitter<{ action: string; card: KanbanCard }>();
  protected isOptionsOpen: boolean = false;
  optionsPosition = { top: 0, left: 0 };
  getPriorityColor(): string {
    switch (this.card.priority) {
      case 'high':
        return '#ff0000';
      case 'medium':
        return '#ffff00';
      case 'low':
        return '#00ff00';
      default:
        return '#ffffff';
    }
  }

  getPriorityLabel(): string {
    switch (this.card.priority) {
      case 'high':
        return 'ALTA';
      case 'medium':
        return 'MÉDIA';
      case 'low':
        return 'BAIXA';
      default:
        return '';
    }
  }

  toggleCardOptions(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();

    this.optionsPosition = {
      top: rect.bottom + 4,
      left: rect.left
    };

    this.isOptionsOpen = !this.isOptionsOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-kanban-card')) {
      this.isOptionsOpen = false;
    }
  }

  protected onAction(action: string) {
    this.cardAction.emit({action, card: this.card});
    this.isOptionsOpen = false;
  }
}
