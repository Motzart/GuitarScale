import { GuitarScalePage } from './app.po';

describe('guitar-scale App', () => {
  let page: GuitarScalePage;

  beforeEach(() => {
    page = new GuitarScalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
