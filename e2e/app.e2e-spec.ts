import { SpeechPage } from './app.po';

describe('speech App', () => {
  let page: SpeechPage;

  beforeEach(() => {
    page = new SpeechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
