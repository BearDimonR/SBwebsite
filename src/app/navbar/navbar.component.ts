import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {ScrollableService} from '../../services/scrollable.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  minFontSize: number;

  @Output() opened = new EventEmitter();

  constructor(private router: Router, private scrollableService: ScrollableService) { }

  ngOnInit() {
    this.checkFont();
  }

  clickLogo() {
    if (this.router.url === '/') {
      window.location.reload();
      this.scrollableService.setOffset(0);
    } else {
      this.router.navigate(['']).then(r => this.scrollableService.setOffset(0));
    }
  }

  checkFont() {
    this.minFontSize = window.innerWidth <= 600 ? 15 : 25;
    this.minFontSize = window.innerWidth <= 300 ? 12 : this.minFontSize;
  }
}
