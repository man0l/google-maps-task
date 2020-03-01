import { PlanaTaskPage } from './app.po';

describe('plana-task App', function() {
  let page: PlanaTaskPage;

  beforeEach(() => {
    page = new PlanaTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
