import Page from './page.js';

export default class PastebinPage extends Page {
    constructor(driver) {
        super(driver);
    };

    get newPaste() { 
        return this.findById('postform-text'); 
    }

    get pasteExpiration() { 
        return this.findById('select2-postform-expiration-container'); 
    }

    get pasteExpirationItem10Minutes() { 
        return this.findByXpath('//li[@id="select2-postform-expiration-result-u88u-10M"] | //li[text()="10 Minutes"]'); 
    }

    get pasteNameTitle() { 
        return this.findById('postform-name');
     }

    get createNewPaste() { 
        return this.findByXpath('//button[text()="Create New Paste"]'); 
    }

    async open() {
        await super.open('https://pastebin.com');
    }


}

//export default new PastebinPage();