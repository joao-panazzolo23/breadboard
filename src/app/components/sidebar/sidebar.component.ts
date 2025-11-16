import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  toggleMenu(arg0: string) {}
  isOpen = false;

  @Input() isVisible: boolean = true;
  openMenus: any;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  isMenuOpen(menuId: string) {
    return !!this.openMenus[menuId];
  }
}
