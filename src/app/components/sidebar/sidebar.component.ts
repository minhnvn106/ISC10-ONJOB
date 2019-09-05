import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: any[];
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
  { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
  { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },

  {
    path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '',
    children: [
      { path: '/nation-managerment', title: 'Quản lý quốc gia', icon: 'users_single-02', class: '' },
      { path: '/employee-type-managerment', title: 'Quản lý loại nhân viên', icon: 'users_single-02', class: '' },
      { path: '/certype-management', title: 'Quản lý chứng chỉ', icon: 'users_single-02', class: '' },
      { path: '/degree-management', title: 'Quản lý bằng cấp', icon: 'users_single-02', class: '' },
      { path: '/province-management', title: 'Quản lý tỉnh - thành phố', icon: 'users_single-02', class: '' },
      { path: '/record-management', title: 'Quản lý hồ sơ', icon: 'users_single-02', class: '' },
      { path: '/shift-management', title: 'Quản lý ca', icon: 'users_single-02', class: '' },
    ]
  },

  { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isTableDropdow = false;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  changeTableDropdow() {
    this.isTableDropdow = !this.isTableDropdow;
    console.log('sdfsdfs: ' + this.isTableDropdow);

  }
}
