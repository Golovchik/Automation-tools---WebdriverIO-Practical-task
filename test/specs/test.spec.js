import { Builder, By, Key } from "selenium-webdriver";
import { expect } from "chai";
import PastebinPage from "../pages/pastebin.page.js";
import PostedPastePage from "../pages/postedPaste.page.js";

const driver = await new Builder().forBrowser("chrome").build();
driver.manage().setTimeouts( { implicit: 5000 } );

const objICanWin = { 
    newPaste : 'Hello from WebDriver',
    pasteNameTitle : 'helloweb', 
};
const objBringItOn = { 
    newPaste : ['git config --global user.name "New Sheriff in Town"', 
                'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")', 
                'git push origin master --force'], 
    pasteNameTitle : 'how to gain dominance among developers',            
};

describe("Automation tools - WebdriverIO Practical task", () => {
    const pastebinPage = new PastebinPage(driver);
    const postedPastePage = new PostedPastePage(driver);

    before("open browser", () => {
        pastebinPage.open();
    });

    after("close the browser", () => {
        //pastebinPage.quit();
    });

    describe("I Can Win", () => {
        it("should open pastebin.com", async () => {
            const title = await pastebinPage.getTitle();
            
            expect("Pastebin.com - #1 paste tool since 2002!").to.be.equal(title);
        });

        it("should create a new paste", async () => {
            const newPasteInput = await pastebinPage.newPasteInput();
            await pastebinPage.setValue(newPasteInput, objICanWin.newPaste); 
            await pastebinPage.pasteExpirationDropDown().click();
            await pastebinPage.pasteExpirationItem10Minutes().click();
            const pasteNameTitleInput = await pastebinPage.pasteNameTitleInput();
            await pastebinPage.setValue(pasteNameTitleInput, objICanWin.pasteNameTitle);
            
        });
    });

  
    describe("Bring It On", () => {
        it("should open pastebin.com", async () => {
            pastebinPage.open();
            const title = await pastebinPage.getTitle();

            expect("Pastebin.com - #1 paste tool since 2002!").to.be.equal(title);
        });

        it("should create a new paste", async () => {
            const newPasteInput = await pastebinPage.newPasteInput();
            for (const item of objBringItOn.newPaste) {
                await pastebinPage.addValue(newPasteInput, item, Key.ENTER);
            };

            await pastebinPage.syntaxHighlightingDropDown().click();
            await pastebinPage.syntaxHighlightingDropDownItemBash().click();
            const pasteNameTitleInput = await pastebinPage.pasteNameTitleInput();
            await pastebinPage.setValue(pasteNameTitleInput, objBringItOn.pasteNameTitle);
            await pastebinPage.pasteExpirationDropDown().click();
            await pastebinPage.pasteExpirationItem10Minutes().click(); 
        });

        it("should save paste", async () => {
            //postedPastePage.open("https://pastebin.com/6Fe41LeB");//
            //postedPastePage.open("https://pastebin.com/bRjRTYeG");// 
            //https://pastebin.com/tkgz6zy9
            //postedPastePage.open("https://pastebin.com/tkgz6zy9");//
            const createNewPasteButton = await pastebinPage.createNewPasteButton();
            await createNewPasteButton.click();
            
            const noteYourGuestPasteHasBeenPostedText = await postedPastePage.noteYourGuestPasteHasBeenPosted().getText();
            
            expect(noteYourGuestPasteHasBeenPostedText).to.include('Your guest paste has been posted.');
        });

        it("should browser page title matches Paste Name / Title", async () => {
            const title = await pastebinPage.getTitle();
    
            expect(`${objBringItOn.pasteNameTitle} - Pastebin.com`).to.be.equal(title);
        });

        it("should syntax is suspended for bash", async () => {
            const syntaxForHrefText = await postedPastePage.syntaxForHref().getText();

            expect('Bash').to.be.equal(syntaxForHrefText);
        });

        it("check that the code matches the code entered when creating paste", async () => {
            const resultOfHighlightedCode = await postedPastePage.getResultOfHighlightedCode();

            expect(objBringItOn.newPaste).to.deep.equal(resultOfHighlightedCode);
        });
    });
});


