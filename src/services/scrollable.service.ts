import {CdkScrollable} from '@angular/cdk/overlay';
import {fromEvent} from 'rxjs';

export class ScrollableService {

  private scrollable: CdkScrollable;

  constructor() {
  }

  init(scrollable) {
    this.scrollable = scrollable;
  }

  get getOffset() {
    return this.scrollable === undefined ? 0 : this.scrollable.measureScrollOffset('top');
  }

  setOffset(n) {
    if (this.scrollable === undefined) { return; }
    this.scrollable.scrollTo({top: n});
  }

  get getScrollObservable() {
    return this.scrollable === undefined ? undefined : this.scrollable.elementScrolled();
  }
}
