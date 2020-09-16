describe('Google', () => {
  it('should open a new page', async () => {
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await expect(page).toMatch('google');
  });
});
