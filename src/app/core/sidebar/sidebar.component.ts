import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarItemDto} from './interfaces/sidebar-item.dto';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  @Input() expanded = false;
  @Output() toggle = new EventEmitter<void>();
  get iconToggle(): string {
    return this.expanded ? "bottom_panel_open" : "bottom_panel_closed";
  }
  items: SidebarItemDto[] = [
    {icon: 'home', label: 'Home', route: '/home', children: null},
    {icon: 'list_alt', label: 'Pedidos', route: '/orders', children: null},
    {icon: 'universal_currency_alt', label: 'Financeiro', route: '/finance', children: null},
    {icon: 'settings', label: 'Configurações', route: '/settings', children: null}
  ];

  protected toggleItem(item: SidebarItemDto) {

  }

  protected logout() {

  }
}
