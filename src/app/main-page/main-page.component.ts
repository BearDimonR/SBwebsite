import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';
import {ScrollableService} from '../../services/scrollable.service';
import {Subscription} from 'rxjs';
import {NavbarService} from '../../services/navbar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('titleTextAnim', [
      transition('* => true', [
        style([{opacity: 0}]),
        animate('0.8s 1s ease-in',
          keyframes([
            style({opacity: 0.1, left: '6vw'}),
            style({opacity: 0.4, left: '7vw'}),
            style({opacity: 0.7, left: '7.4vw'}),
            style({opacity: 1, left: '7.7vw'}),
            style({opacity: 1, left: '8vw'})
          ])
        )
      ])
    ]),
    trigger('titleImageAnim', [
      transition('* => true', [
        style({opacity: 0, height: '5%'}),
        animate('1s ease-out')
      ])
    ]),
    trigger('infoDescTextAnim', [
      transition('* => true', [
        animate('1.4s ease-in',
          keyframes([
            style({opacity: 0.1, top: '5vw'}),
            style({opacity: 0.4, top: '3vw'}),
            style({opacity: 0.7, top: '1vw'}),
            style({opacity: 1, top: '0'})
          ])
        )
      ])
    ]),
    trigger('projectImageAnim', [
      transition('* => true', [
        group([
          query('.project-img', [
            animate('1.2s ease-in',
              keyframes([
                style({top: '30%'}),
                style({top: '20%'}),
                style({top: '10%'}),
                style({top: '6%'}),
                style({top: '3%'}),
                style({top: '0'}),
              ])
            )
          ]),
          query('.project-img.animation', [
            animate('1.2s ease-in', keyframes([
              style({opacity: 1, height: '100%'}),
              style({opacity: 1, height: '80%'}),
              style({opacity: 1, height: '60%'}),
              style({opacity: 1, height: '40%'}),
              style({opacity: 1, height: '20%'}),
              style({opacity: 1, height: '0'})]))
          ])])
      ])
    ]),
    trigger('projectTextAnim', [
      transition('* => true', [
        style({right: '-100%'}),
        animate('1.5s ease-in')
      ])
    ]),
    trigger('treePageAnim', [
      transition('* => true', [
        group([
          animate('1.5s ease-in',
            keyframes([
              style({opacity: 0.2}),
              style({opacity: 0.5}),
              style({opacity: 0.8}),
              style({opacity: 1})
            ])
          ),
          query('.tree-box-text', style({opacity: 0})),
          query('.tree-box-text-flex', style({opacity: 0}))
        ]),
        group([
          query('.tree-box-text', [
            style({opacity: 0, right: '20%'}),
            animate('0.8s ease-in')
          ]),
          query('.tree-box-text-flex', [
            style({opacity: 0}),
            animate('0.8s ease-in')
          ])
        ])
      ])
    ])
  ]
})

export class MainPageComponent implements OnInit, AfterViewInit {

  titleAnim: boolean;
  infoAnim: boolean;
  projectAnim: boolean;
  treeAnim: boolean;
  subscription: Subscription;

  constructor(private scrollableService: ScrollableService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.titleAnim = true;
    const observable = this.scrollableService.getScrollObservable;
    if (observable !== undefined) {
      this.subscription = observable.subscribe(() => {
        this.checkScroll();
      });
    }
  }

  checkScroll() {
    if (window.innerWidth > 600) {
      if (this.scrollableService.getOffset >= window.innerHeight / 2) {
        this.infoAnim = true;
      }
      if (this.scrollableService.getOffset >= 2.8 * window.innerHeight / 2) {
        this.projectAnim = true;
      }
      if (this.scrollableService.getOffset >= 4.2 * window.innerHeight / 2) {
        this.treeAnim = true;
      }
    } else {
      if (this.scrollableService.getOffset >= window.innerHeight / 3) {
        this.infoAnim = true;
      }
      if (this.scrollableService.getOffset >= 2.5 * window.innerHeight / 2) {
        this.projectAnim = true;
      }
      if (this.scrollableService.getOffset >= 4.2 * window.innerHeight / 2) {
        this.treeAnim = true;
      }
    }
  }

}
