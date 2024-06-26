import {Builder, By} from "selenium-webdriver"
import chrome from "selenium-webdriver/chrome.js"

const options = new chrome.Options()
options.addArguments('start-maximized'); // Maximizar ventana

const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

async function openPage() {
    try {
        await driver.get("http://localhost:5173/")

        const registerButton = await driver.findElement(By.id("button-register"))
        await registerButton.click()

        const closeRegister = await driver.findElement(By.id("close-register"))
        await closeRegister.click()


    } finally {
        // await driver.quit()
    }
}

openPage().then(r => r)
