import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanbanBoardComponent} from '../kanbam-board/kanban.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../core/guards/auth-guard.service';


const routes: Routes = [
  {path: '', component: KanbanBoardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class OrderRoutesModule {

}
