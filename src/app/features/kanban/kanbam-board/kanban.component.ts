import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {KanbanColumnComponent} from '../kanbam-column/kanban-column.component';
import {KanbanColumnInterface} from '../interfaces/kanban-column.interface';
import {KanbanCard} from '../interfaces/kanban.card.interface';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, KanbanColumnComponent, DragDropModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
})
export class KanbanBoardComponent {

  //THIS WILL BE BRING FROM BACKEND
  columns: KanbanColumnInterface[] = [
    {
      id: 'todo',
      title: 'ORCAMENTO',
      cards: [
        {id: '1', title: 'Task 1', description: 'Description 1', priority: 'high'},
        {id: '2', title: 'Task 2', description: 'Description 2', priority: 'medium'},
        {id: '3', title: 'Task 3', description: 'Description 3', priority: 'low'},
      ]
    },
    {
      id: 'inprogress',
      title: 'A FAZER',
      cards: [
        {id: '4', title: 'Task 4', description: 'Description 4', priority: 'high'},
      ]
    },
    {
      id: 'review',
      title: 'PAGO',
      cards: [
        {id: '5', title: 'Task 5', description: 'Description 5', priority: 'medium'},
      ]
    },
    {
      id: 'done',
      title: 'CONCLUÍDO',
      cards: [
        {id: '6', title: 'Task 6', description: 'Description 6', priority: 'low'},
        {id: '7', title: 'Task 7', description: 'Description 7', priority: 'medium'},
      ]
    }
  ];

  drop(event: CdkDragDrop<KanbanCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getConnectedLists(): string[] {
    return this.columns.map(column => column.id);
  }
}
