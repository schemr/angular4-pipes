import { Angular4PipesPage } from './app.po';

describe('angular4-pipes App', () => {
  let page: Angular4PipesPage;

  beforeEach(() => {
    page = new Angular4PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
