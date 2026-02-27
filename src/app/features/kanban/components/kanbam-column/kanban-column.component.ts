import {Component, Input, Output, EventEmitter, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {KanbanColumnInterface} from '../../interfaces/kanban-column.interface';
import {KanbanCardComponent} from '../kanbam-card/kanban-card.component';
import {KanbanCard} from '../../interfaces/kanban.card.interface';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, KanbanCardComponent, DragDropModule],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss',
})
export class KanbanColumnComponent {

  column = input.required<KanbanColumnInterface>();
  connectedTo = input<string[]>([]);
  cardDropped = output<CdkDragDrop<KanbanCard[]>>();
  cardAction = output<{ action: string; card: KanbanCard }>();

  private optionsOpen: boolean = false;

  onDrop(event: CdkDragDrop<KanbanCard[]>) {
    this.cardDropped.emit(event);
  }

  protected onCardAction(event: { action: string; card: KanbanCard }) {
    this.cardAction.emit(event);
  }

}
