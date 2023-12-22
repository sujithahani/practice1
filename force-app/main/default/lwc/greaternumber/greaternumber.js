import { LightningElement } from 'lwc';

export default class Greaternumber extends LightningElement {
    fnumber;
    snumber;
    tnumber;

    handleFirstnumber(event){
        console.log( 'first number'+event.target.value);
        this.fnumber=event.target.value;
    }
    handleSecondnumber(event){
        console.log( 'Second number'+event.target.value);
        this.snumber=event.target.value;
    }
    handleThirdnumber(event){
        console.log( 'Third number'+event.target.value);
        this.tnumber=event.target.value;
    }
    handleCalculate(event){
        //creating the variables to store the values
        const a= parseInt(this.fnumber);
        const b=parseInt(this.snumber);
        const c=parseInt(this.tnumber);

        if(a>b && a>c){
            alert('this is greater number' +a);
        }
        else if(b>a && b>c){
            alert('greater number is :' +b);
        }
        else {
            alert('Greater number is :' +c);
        }
    }
    handleClear(event){
        this.fnumber=' ';
        this.snumber=' ';
        this.tnumber=' ';
        console.log( 'clear number' +event.target.value);

    }
    
}