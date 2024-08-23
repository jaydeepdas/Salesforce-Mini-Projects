import { LightningElement, track } from 'lwc';
export default class QuizApp extends LightningElement {

    selected={}
    correctAnswer=0
    isSubmitted= false
    isModalOpen = false;
    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which decorator is used to expose a public property in an LWC component?",
            answers: {
                a: "@track",
                b: "@api",
                c: "@wire"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "What method is used to dispatch a custom event in LWC?",
            answers: {
                a: "dispatchEvent",
                b: "fireEvent",
                c: "triggerEvent"
            },
            correctAnswer: "a"
        },
        {
            id: "Question4",
            question: "Which lifecycle hook is called when a component is inserted into the DOM?",
            answers: {
                a: "renderedCallback",
                b: "connectedCallback",
                c: "disconnectedCallback"
            },
            correctAnswer: "b"
        },
        {
            id: "Question5",
            question: "In LWC, how can you access a DOM element in your JavaScript code?",
            answers: {
                a: "querySelector",
                b: "getElementById",
                c: "getElement"
            },
            correctAnswer: "a"
        },
        {
            id: "Question6",
            question: "Which directive is used to bind an event handler to an HTML element in LWC?",
            answers: {
                a: "onclick",
                b: "onevent",
                c: "on"
            },
            correctAnswer: "a"
        },
        {
            id: "Question7",
            question: "What is the default access level of a property in an LWC component?",
            answers: {
                a: "public",
                b: "private",
                c: "protected"
            },
            correctAnswer: "b"
        },
        {
            id: "Question8",
            question: "Which decorator is used to make a property reactive in LWC?",
            answers: {
                a: "@track",
                b: "@api",
                c: "@reactive"
            },
            correctAnswer: "a"
        },
        {
            id: "Question9",
            question: "What is the purpose of the @wire decorator in LWC?",
            answers: {
                a: "To expose a public property",
                b: "To make a property reactive",
                c: "To connect a property or method to Salesforce data"
            },
            correctAnswer: "c"
        },
        {
            id: "Question10",
            question: "Which of the following is a valid LWC lifecycle hook?",
            answers: {
                a: "didMount",
                b: "willUnmount",
                c: "renderedCallback"
            },
            correctAnswer: "c"
        }

    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer? 'slds-text-color_success':'slds-text-color_error'}`
    }
    changeHandler(event){
        console.log('name',event.target.name);
        console.log('value',event.target.value);
        const{name,value} = event.target;
        this.selected={...this.selected, [name]: value}
    }

    submitHandler(event){
            event.preventDefault();
            let correct = this.myQuestions.filter(item=> this.selected[item.id] === item.correctAnswer)
            this.correctAnswer= correct.length
            this.isSubmitted=true
            console.log("this.correctAnswer", this.correctAnswer);
    }
    resetHandler(){
        this.selected={}
        this.correctAnswer=0
        this.isSubmitted=false
    }
    closeModal() {
        console.log('OUTPUT : ',this.closeModal);
        this.isSubmitted = false;
    }
}