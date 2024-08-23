import { LightningElement, track } from 'lwc';

export default class ExpenseTracker extends LightningElement {
    @track expenses = [];
    nextId = 0;
    @track newExpense = {
        id: this.nextId++,
        date: '',
        paymentType: '',
        description: '',
        amount: 0
    };

    handleDateChange(event) {
        this.newExpense.date = event.target.value;
    }

    handlePaymentTypeChange(event) {
        this.newExpense.paymentType = event.target.value;
    }

    handleDescriptionChange(event) {
        this.newExpense.description = event.target.value;
    }

    handleAmountChange(event) {
        this.newExpense.amount = event.target.value;
    }

    addExpense() {
        this.expenses = [...this.expenses, this.newExpense];
        this.newExpense = {
            id: this.nextId++,
            date: '',
            paymentType: '',
            description: '',
            amount: 0
        };
    }
}