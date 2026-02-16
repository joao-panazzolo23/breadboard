import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KanbanCard} from '../interfaces/kanban.card.interface';


@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss',
})
export class KanbanCardComponent {
  @Input() card!: KanbanCard;

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
}
