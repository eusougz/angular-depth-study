import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  animations: [
    trigger('hideShow', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('450ms 250ms ease-out', style({ height: '100%', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '100%', opacity: 0 }),
        animate('100ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ]),
    trigger('menuOpenClose', [
      state('open', style({ width: '30%' })),
      state('closed', style({ width: '100%' })),
      transition('closed => open', [
        animate('250ms ease-out')
      ]),
      transition('open => closed', [
        animate('350ms 101ms ease-out')
      ])
    ])
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  menu: number;

  constructor() { }

  ngOnInit() {
    this.menu = 0;
  }

  aboutMe() {
    if (this.menu === 1) { this.menu = 0; } else { this.menu = 1; }
  }

  skills() {
    if (this.menu === 2) { this.menu = 0; } else { this.menu = 2; }
  }

  personalProjects() {
    if (this.menu === 3) { this.menu = 0; } else { this.menu = 3; }
  }

}
