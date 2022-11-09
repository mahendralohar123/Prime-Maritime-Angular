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
        { menuName: 'Quotations', menuLink: '/home/quotation-list' },
        { menuName: 'Bookings', menuLink: '/home/booking-list' },
        { menuName: 'Delivery-Orders', menuLink: '/home/do-list' },
        { menuName: 'EmptyRepoLocal', menuLink: '/home/new-er' },
        { menuName: 'Roll-Over', menuLink: '/home/split-booking' },
        { menuName: 'CRO', menuLink: '/home/cro-list' },
        { menuName: 'DO', menuLink: '/home/do' },
        { menuName: 'BL', menuLink: '#' },
        { menuName: 'Finance', menuLink: '#' }
      );
    }
  }
}
