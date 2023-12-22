import { LightningElement } from 'lwc';

export default class Lwc_button extends LightningElement {
    ename;

    handleChange(event){
        console.log('Event Details' +event);
        console.log('event details:' +JSON.stringify(event));
        console.log('event detais target:' +JSON.stringify(event.target));
        console.log('event deatails target value:' +JSON.stringify(event.target.value));

        this.ename=event.target.value;
    }
    handleSubmit(event){
        this.ename='Winter 24';
    }
}