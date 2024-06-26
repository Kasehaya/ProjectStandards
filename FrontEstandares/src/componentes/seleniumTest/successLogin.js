import {Builder, By, Key} from "selenium-webdriver"
import chrome from "selenium-webdriver/chrome.js"

const options = new chrome.Options()
options.addArguments('start-maximized'); // Maximizar ventana

const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

async function openPage() {
    try {
        await driver.get("http://localhost:5173/")

        const emailElement = await driver.findElement(By.id("floatingInput"))
        await emailElement.clear()
        await emailElement.sendKeys("helugial@gmail.com")
        // await emailElement.sendKeys(Key.ENTER)
        await driver.sleep(1)

        const passwordlElement = await driver.findElement(By.id("floatingPassword"))
        await passwordlElement.clear()
        await passwordlElement.sendKeys("Hector1012.")
        // await passwordlElement.sendKeys(Key.ENTER)
        await driver.sleep(1)

        const elemento = await driver.findElement(By.id("button-login"))
        await elemento.click()


    } finally {
        // await driver.quit()
    }
}

openPage().then(r => r)
