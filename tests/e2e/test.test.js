/* eslint-disable */
const playwright = require('playwright')

const rootSelector = '#root'
let browser, context, page

const root = async () => await page.$(rootSelector)

describe('test', () => {
  test('test playwright', async () => {
    const browser = await playwright.chromium.launch({
      headless: false,
      slowMo: 30,
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.$(rootSelector)

    await page.goto('http://127.0.0.1:3000/')
    await jestPlaywright.debug()
    // await page.screenshot({ path: 'example-.png' })
    // console.log({ right })
    await page.click('text="Right"')

    await jestPlaywright.debug()
    await browser.close()
  })
})
