import {Builder, By, until} from "selenium-webdriver"
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
        await driver.sleep(1)

        const passwordlElement = await driver.findElement(By.id("floatingPassword"))
        await passwordlElement.clear()
        await passwordlElement.sendKeys("Hector1012.")
        await driver.sleep(1)

        const elemento = await driver.findElement(By.id("button-login"))
        await elemento.click()
        await driver.wait(until.alertIsPresent());

        const alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.sleep(1)

        const dangerButtons = await driver.findElements(By.className('btn btn-danger'));
        if (dangerButtons.length >= 2) {
            await dangerButtons[1].click();
            await driver.wait(until.alertIsPresent());

            const alert2 = await driver.switchTo().alert();
            await alert2.accept();
            await driver.sleep(900)

            const alert3 = await driver.switchTo().alert();
            await alert3.accept();

        } else {
            console.log('No hay suficientes botones para realizar la operación.');
        }

    } finally {
        // await driver.quit()
    }
}

openPage().then(r => r)
