import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TreePageComponent } from './tree-page/tree-page.component';
import { TreeComponent } from './tree/tree.component';
import { ProjectPageComponent } from './projects-page/project-page.component';
import { ProjectComponent } from './project/project.component';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatAnimatedIconComponent } from './mat-animated-icon/mat-animated-icon.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFittextModule} from 'angular-fittext';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollableService} from '../services/scrollable.service';
import {NavbarService} from '../services/navbar.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    TreePageComponent,
    TreeComponent,
    ProjectPageComponent,
    ProjectComponent,
    MatAnimatedIconComponent,
    SidenavContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFittextModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ScrollingModule,
  ],
  providers: [
    ScrollableService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
