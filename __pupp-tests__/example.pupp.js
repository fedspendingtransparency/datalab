const siteRoot = 'http://localhost:9001';

describe('Homepage Test', () => {

  beforeAll(async () => {
    await page.goto(siteRoot, { waitUntil: "domcontentloaded" });
  });

  it('should match text in homepage', async () => {
    await expect(page).toMatch('The Federal Response');
  });

});

