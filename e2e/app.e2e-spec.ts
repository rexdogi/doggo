import { DoggoPage } from './app.po';

describe('doggo App', function() {
  let page: DoggoPage;

  beforeEach(() => {
    page = new DoggoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
