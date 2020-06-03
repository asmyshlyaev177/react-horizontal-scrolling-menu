/* eslint-disable */
import { browser, context, page, load, close } from './utils.js'

describe('test', () => {
  beforeAll(async () => {
    await load()
  })
  afterAll(async () => {
    await close()
  })

  test('test playwright', async () => {
    await jestPlaywright.debug()
    // await page.screenshot({ path: 'example-.png' })
    console.log({ page })
    await page.click('text="Right"')

    await jestPlaywright.debug()
    await browser.close()
  })
})
