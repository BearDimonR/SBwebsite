import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSidenav} from '@angular/material';
import {CdkScrollable} from '@angular/cdk/overlay';
import {ScrollableService} from '../services/scrollable.service';
import {NavbarService} from '../services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('hiding', [
    state('false', style({
      top: '0',
    }), {params: {height: 100}}),
    state('true', style({
      top: '-{{height}}px',
    }), {params: {height: 100}}),
    transition('false => true', [
      animate('0.4s')
    ]),
    transition('true => false', [
      animate('0.2s')
    ]),
  ]),
  trigger('making-bigger', [
    state('false', style({
      height: '{{height}}px'
    }), {params: {height: 0}}),
    state('true', style({
      height: '{{height}}px'
    }), {params: {height: 0}}),
    transition('false => true', [
      animate('0.3s')
    ]),
    transition('true => false', [
      animate('0.2s')
    ]),
  ])]})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'SBwebsite';
  hideNav = false;
  height = 0;
  defaultHeight = 0;
  titleHeight = 0;
  offset = 0;
  startOffset = window.innerHeight / 6;
  opened = false;

  @ViewChild(CdkScrollable, {static: false}) scrollable: CdkScrollable;

  constructor(private el: ElementRef,
              private scrollableService: ScrollableService,
              private navbarService: NavbarService) {
  }

  private check() {
    if (window.innerWidth < 700 || window.innerHeight < 700) {
      this.height =  100;
      this.defaultHeight = 80;
      this.titleHeight = 100;
    } else {
      this.height = 150;
      this.defaultHeight = 100;
      this.titleHeight = 150;
    }
    this.navbarService.init(this.titleHeight, this.defaultHeight);
  }

  ngOnInit(): void {
    this.check();
    this.scroll();
  }

  ngAfterViewInit(): void {
    this.scrollableService.init(this.scrollable);
  }

  scroll() {
    let hide = this.offset <= this.scrollableService.getOffset;
    if (hide) {
      hide = !(this.startOffset >= this.scrollableService.getOffset);
    }
    this.hideNav = hide;
    this.offset = this.scrollableService.getOffset;
    if (!hide && this.scrollableService.getOffset < this.startOffset) {
      this.height = this.titleHeight;
    } else {
      this.height = this.defaultHeight;
    }
  }
}
