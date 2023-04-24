import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
  }

  scrollShelBox(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollAbout(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollLocation(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollContact(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
