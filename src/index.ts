import { chromium } from '@playwright/test'
;(async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    proxy: {
      server: 'http://localhost:8000',
      username: 'bob',
      password: 'secret',
    },
  })

  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://github.com')

  const content = await page.content()

  console.log(content)

  return process.exit()
})()
