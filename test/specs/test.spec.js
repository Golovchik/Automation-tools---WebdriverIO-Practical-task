import { Builder, By, Key } from "selenium-webdriver"; 
import { expect } from "chai";
import PastebinPage from '../pages/pastebin.page.js';

describe("Automation tools - WebdriverIO Practical task", () => {
    
    describe("I Can Win", () => {

        it("should open https://pastebin.com", async () => {
            const driver = await new Builder().forBrowser("chrome").build();
            const pastebinPage = new PastebinPage(driver);
            pastebinPage.open();
          
            expect(await pastebinPage.driver.getTitle()).to.be.equal('Pastebin.com - #1 paste tool since 2002!');

            await pastebinPage.quit();
        });
        
        it("should create a New Paste", async () => {
            const driver = await new Builder().forBrowser("chrome").build();
            const pastebinPage = new PastebinPage(driver);
            pastebinPage.open();

            let newPaste = await pastebinPage.newPaste;
            await pastebinPage.setValue(newPaste, "Hello from WebDriver");

            let pasteExpiration = await pastebinPage.pasteExpiration;
            await pasteExpiration.click();
            let pasteExpirationItem10Minutes = await pastebinPage.pasteExpirationItem10Minutes;
            await pasteExpirationItem10Minutes.click();

            let pasteNameTitle = await pastebinPage.pasteNameTitle;
            await pastebinPage.setValue(pasteNameTitle, "helloweb");

            let createNewPaste = await pastebinPage.createNewPaste;
            await createNewPaste.click();
            
            await pastebinPage.quit();
        });
    });
})