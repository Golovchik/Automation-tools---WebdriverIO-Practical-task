import Page from './page.js';

export default class PostedPastePage extends Page {
    constructor(driver) {
        super(driver);
    };

    noteYourGuestPasteHasBeenPosted() { 
        return this.findByXpath('//b[text() = "NOTE:"]/..'); 
    } 

    syntaxForHref() { 
        return this.findByCss('a[href^="/archive/"]'); 
    } 
    
    highlightedCodeItemByCounter(counter) {
        return this.findByXpath(`//div[@class = "highlighted-code"]//ol//li[last()-${counter}]`);  
    }   

    async getResultOfHighlightedCode () {
        let resultOfHighlightedCode = [];
        let counter = 0; 
        while (counter >= 0) {
            try {
                let highlightedCodeItem = await this.highlightedCodeItemByCounter(counter);
                let text = await highlightedCodeItem.getText();
                if(text.trim() !== '') {
                    resultOfHighlightedCode.unshift(text);
                }
                counter++;
            } catch (error) {
                counter = -1;  
            }
        }
        return resultOfHighlightedCode;
    }
}
