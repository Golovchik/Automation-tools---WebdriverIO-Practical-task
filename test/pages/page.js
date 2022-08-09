import { Builder, By, Key } from "selenium-webdriver";

export default class Page {
    constructor(driver) {
        this.driver = driver;
    };

    open(path) {
        this.driver.get(path);
    };

    quit() {
        this.driver.quit();
    };

    getTitle() {
        return this.driver.getTitle();
    };

    findById(id) {
        return this.driver.findElement(By.id(id));
    };

    findByCss(css) {
        return this.driver.findElement(By.css(css));
    };

    findByСlassName(className) {
        return this.driver.findElement(By.className(className));
    };

    findByXpath(xpath) {
        return this.driver.findElement(By.xpath(xpath));
    };

    findAllByXpath (xpath) {
        return this.driver.findElements(By.xpath(xpath));
    };

    setValue (element, value, key = Key.SHIFT) {
        element.clear();
        return element.sendKeys(value, key);
    };

    addValue (element, value, key = Key.SHIFT) {
        return element.sendKeys(value, key);
    };

    click (element) {
        return element.click();
    };
}