export interface SidebarItemDto {
  icon: string;
  label: string;
  route: string;
  children?: SidebarItemDto[] | null;
  expanded?: boolean;
}
