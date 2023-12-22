import { LightningElement } from 'lwc';

export default class Lwc_homework1 extends LightningElement {
    fullName;
    Email;
    handleChange(event){
        console.log('Target Value: ' +JSON.stringify(event.target.value) );
        this.handleChange=event.target.value;

    }
    handlesubmit(event){
        this.handlesubmit=email;
        
    }
}