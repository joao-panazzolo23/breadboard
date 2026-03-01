import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanbanBoardComponent} from './pages/order-board/kanban.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/guards/auth-guard.service';
import {OrderDetailsComponent} from './pages/order-details/order-details.component';


const routes: Routes = [
  {path: '', component: KanbanBoardComponent},
  {path: 'details', component: OrderDetailsComponent},
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
