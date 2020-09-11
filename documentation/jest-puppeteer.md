# Jest Puppeteer

## Quick Example

Use Puppeteer in your tests:

```
import 'expect-puppeteer'

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})
```

## API!

You can take a look at the API directly here : https://github.com/smooth-code/jest-puppeteer/blob/master/packages/expect-puppeteer/README.md#api

Below are some quick examples for things you'd test.

## Writing tests using Puppeteer

Writing integration test can be done using Puppeteer API but it can be complicated and hard because API is not designed for testing.

To make it simpler, expect-puppeteer API add some specific matchers if you make expectation on a Puppeteer Page.

Some examples:
Find a text in the page

```
// Assert that current page contains 'Text in the page'
await expect(page).toMatch('Text in the page')
```

Click a button
```
// Assert that a button containing text "Home" will be clicked
await expect(page).toClick('button', { text: 'Home' })
```

Fill a form
```
// Assert that a form will be filled
await expect(page).toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

Put in debug mode

Debugging tests can be hard sometimes and it is very useful to be able to pause tests in order to inspect the browser. Jest Puppeteer exposes a method jestPuppeteer.debug() that suspends test execution and gives you opportunity to see what's going on in the browser.

```
await jestPuppeteer.debug()

```
