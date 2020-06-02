import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('test', { static: true }) title: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const clickTitle: Observable<any> = fromEvent(this.title.nativeElement, 'click');

    clickTitle.subscribe(() => {
      alert('clicou no titulo!');
      return;
    });
  }

}
