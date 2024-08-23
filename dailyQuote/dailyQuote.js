import { LightningElement, track, wire } from 'lwc';
import getQuote from '@salesforce/apex/QuoteService.getQuote';

export default class DailyQuote extends LightningElement {
    @track quote = '';
    @track author = '';
    @track isLoading = true;

    @wire(getQuote)
    wiredQuote({ error, data }) {
        if (data) {
            this.quote = data.quote;
            this.author = data.author;
            this.isLoading = false;
        } else if (error) {
            console.error('Error fetching quote:', error);
            this.isLoading = false;
        }
    }




    handleNewQuote() {
        console.log("handleNewQuote......")
        this.isLoading = true;
        getQuote()
            .then(result => {
                this.quote = result.quote;
                this.author = result.author;
                this.isLoading = false;
                console.log("this.Quote.........", this.Quote)
                console.log("this.author.........", this.author)

            })
            console.log("this.Quote.........", this.quote)
                console.log("this.author.........", this.author)
            .catch(error => {
                console.error('Error fetching quote:', error);
                this.isLoading = false;
            });
    }

    handleShare() {
        const tweetText = encodeURIComponent(`"${this.quote}" - ${this.author}`);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(twitterUrl, '_blank');
    }
}