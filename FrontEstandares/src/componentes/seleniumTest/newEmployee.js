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
        // await emailElement.sendKeys(Key.ENTER)
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

        const addElement = await driver.findElement(By.className("btn btn-info"))
        await addElement.click()

        const documentElement = await driver.findElement(By.id("employee_document"))
        await documentElement.clear()
        await documentElement.sendKeys("10052313243")
        await driver.sleep(1)

        const nombreElement = await driver.findElement(By.id("employee_nombre"))
        await nombreElement.clear()
        await nombreElement.sendKeys("Diego")
        await driver.sleep(1)

        const apellidoElement = await driver.findElement(By.id("employee_apellido"))
        await apellidoElement.clear()
        await apellidoElement.sendKeys("Fonseca")
        await driver.sleep(1)

        const direccionElement = await driver.findElement(By.id("employee_direccion"))
        await direccionElement.clear()
        await direccionElement.sendKeys("Calle falsa 123")
        await driver.sleep(1)

        const paisElement = await driver.findElement(By.id("employee_pais"))
        await paisElement.clear()
        await paisElement.sendKeys("Ecuador")
        await driver.sleep(1)

        const telefonoElement = await driver.findElement(By.id("employee_telefono"))
        await telefonoElement.clear()
        await telefonoElement.sendKeys("309273904")
        await driver.sleep(1)

        const regionElement = await driver.findElement(By.id("employee_region"))
        await regionElement.clear()
        await regionElement.sendKeys("Quito")
        await driver.sleep(1)

        const okElement = await driver.findElement(By.className("btn btn-info"));
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        await driver.sleep(1000)
        await okElement.click()
        await driver.wait(until.alertIsPresent());

        const alert2 = await driver.switchTo().alert();
        await alert2.accept();
        await driver.sleep(1)
        await driver.wait(until.alertIsPresent());

        const alert3 = await driver.switchTo().alert();
        await alert3.accept();
        await driver.sleep(1)

    } finally {
        // await driver.quit()
    }
}

openPage().then(r => r)
