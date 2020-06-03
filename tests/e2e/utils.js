const chromium = require('playwright-chromium').chromium
const launchConfig = {
  headless: false,
  slowMo: 30,
}

const rootSelector = '#root'
let browser, context, page

const baseURL = '127.0.0.1:3000'

const load = async () => {
  browser = await chromium.launch(launchConfig)
  context = await browser.newContext()
  page = await context.newPage()
  await page.goto(baseURL)
  await page.$(rootSelector)
}

const close = async () => await browser.close()

export { browser, close, context, load, page }
