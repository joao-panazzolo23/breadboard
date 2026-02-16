import {KanbanCard} from './kanban.card.interface';

export interface KanbanColumnInterface {
  id: string;
  title: string;
  cards: KanbanCard[];
}
