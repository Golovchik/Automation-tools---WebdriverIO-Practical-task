import { Builder, By, Key } from "selenium-webdriver";

export default class Page {
    constructor(driver) {
        this.driver = driver;
    };

    async open(path) {
         await this.driver.get(path);
    };

    async quit() {
         await this.driver.quit();
    };

    async getTitle() {
        return await this.driver.getTitle();
    };

    async findById(id) {
        return await this.driver.findElement(By.id(id));
    };

    async findByCss(css) {
        return await this.driver.findElement(By.css(css));
    };

    async findByСlassName(className) {
        return await this.driver.findElement(By.className(className));
    };

    async findByXpath(xpath) {
        return await this.driver.findElement(By.xpath(xpath));
    };

    async setValue (element, value) {
        await element.clear();
        return await element.sendKeys(value);
     };

    async addValue (element, value) {
        return await element.sendKeys(value);
     };

     async click (element) {
        return await element.click();
     };
  

    
}