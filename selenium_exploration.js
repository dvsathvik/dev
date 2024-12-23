const { Builder, Browser, By, Key } = require('selenium-webdriver');

async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build()

  await driver.get('https://www.google.com')
  await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER)
  console.log("Test 1 Executed")
}

example();