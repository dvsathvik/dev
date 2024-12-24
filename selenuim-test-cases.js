const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('Jenkins', Key.RETURN)
    await driver.wait(until.titleContains('Jenkins'), 1000)
    console.log("Test case 1 executed")
    await driver.findElement(By.name('q')).sendKeys('DevOps', Key.RETURN)
    await driver.wait(until.titleContains('DevOps'), 1000)
    console.log("Test case 2 executed")
    let temp=await driver.findElement(By.name('q'));
    let ans=await temp.isDisplayed()
    console.log("test case 3 ${ans}")
    const temp1=await driver.findElements(By.css('div.g'));
    console.log("test case 4 ${temp1.length}")
} finally {
    await driver.quit()
  }
})()