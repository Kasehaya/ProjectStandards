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

        const documentElement = await driver.findElement(By.id("user_document"))
        await documentElement.clear()
        await documentElement.sendKeys("1019026078")
        await driver.sleep(1)

        const usernameElement = await driver.findElement(By.id("user_username"))
        await usernameElement.clear()
        await usernameElement.sendKeys("paogomez88_@hotmail.com")
        await driver.sleep(1)

        const passwordElement = await driver.findElement(By.id("user_password"))
        await passwordElement.clear()
        await passwordElement.sendKeys("Annie2024")
        await driver.sleep(1)

        const nombreElement = await driver.findElement(By.id("user_nombre"))
        await nombreElement.clear()
        await nombreElement.sendKeys("Paola")
        await driver.sleep(1)

        const apellidoElement = await driver.findElement(By.id("user_apellido"))
        await apellidoElement.clear()
        await apellidoElement.sendKeys("Gomez")
        await driver.sleep(1)

        const countryElement = await driver.findElement(By.id("user_country"))
        await countryElement.clear()
        await countryElement.sendKeys("Colombia")
        await driver.sleep(1)

        const submitButton = await driver.findElement(By.id("button-m-register"))
        await submitButton.click()

    } finally {
        // await driver.quit()
    }
}

openPage().then(r => r)
