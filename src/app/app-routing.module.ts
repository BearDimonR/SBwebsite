import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {TreePageComponent} from './tree-page/tree-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'tree', component: TreePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
