import { ConsultcrmPage } from './app.po';

describe('consultcrm App', () => {
  let page: ConsultcrmPage;

  beforeEach(() => {
    page = new ConsultcrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
