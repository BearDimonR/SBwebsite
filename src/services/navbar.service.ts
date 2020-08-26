export class NavbarService {

  private titleHeight = 0;
  private defaultHeight = 0;

  constructor() {
  }

  init(titleHeight: number, defaultHeight: number) {
    this.titleHeight = titleHeight;
    this.defaultHeight = defaultHeight;
  }

  get getTitleHeight() {
    return this.titleHeight;
  }

  get getDefaultHeight() {
    return this.defaultHeight;
  }
}
