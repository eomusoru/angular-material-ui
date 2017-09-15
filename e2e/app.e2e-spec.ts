import { AngularMaterialUiPage } from './app.po';

describe('angular-material-ui App', () => {
  let page: AngularMaterialUiPage;

  beforeEach(() => {
    page = new AngularMaterialUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
