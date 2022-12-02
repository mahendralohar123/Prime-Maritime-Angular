import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menu: string;
  menuList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getMenuList(this.menu);
  }

  getMenuList(param: any) {
    if (param == 'agent') {
      this.menuList.push(
        { menuName: 'Rate Requests', menuLink: '/home/quotation-list' },
        { menuName: 'Bookings', menuLink: '#' },
        { menuName: 'CRO', menuLink: '/home/cro-list' },
        { menuName: 'DO', menuLink: '/home/do-list' },
        { menuName: 'BL', menuLink: '/home/new-bl' },
        { menuName: 'Container Movement', menuLink: '/home/new-cm' },
        { menuName: 'Container Tracking', menuLink: '/home/tracking' },
        { menuName: 'Finance', menuLink: '#' }
      );
    }
  }
}
