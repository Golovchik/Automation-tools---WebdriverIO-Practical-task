import Page from './page.js';

export default class PastebinPage extends Page {
    constructor(driver) {
        super(driver);
    };

    open() {
        super.open('https://pastebin.com');
    }

    newPasteInput() { 
        return this.findById('postform-text'); 
    };

    syntaxHighlightingDropDown() { 
        return this.findById('select2-postform-format-container'); 
    }

    syntaxHighlightingDropDownItemBash() { 
        return this.findByXpath('//li[@id="select2-postform-format-result-1onh-8"] | //li[text()="Bash"]'); 
    }

    pasteExpirationDropDown() { 
        return this.findById('select2-postform-expiration-container'); 
    }

    pasteExpirationItem10Minutes() { 
        return this.findByXpath('//li[@id="select2-postform-expiration-result-u88u-10M"] | //li[text()="10 Minutes"]'); 
    }

    pasteNameTitleInput() { 
        return this.findById('postform-name');
     }

    createNewPasteButton() { 
        return this.findByXpath('//button[text()="Create New Paste"]'); 
    }
}
