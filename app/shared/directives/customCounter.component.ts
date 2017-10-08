import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'custom-counter',
    template:`
<button (click)="decrement()">-</button>
<span>{{counter}}</span>
<button (click)="increment()">+</button>
`
})
export class CustomCounterComponent {
    //@Input() counterNumber: number = 0;
    counter: number = 0;
    @Output() counterNumberChange = new EventEmitter();

    @Input() set counterNumber(val:number) {
        this.counter = val;
        this.counterNumberChange.emit(this.counter);
    }

    decrement() {
        this.counter--;
        this.counterNumberChange.emit(this.counter);
    }

    increment() {
        this.counter++;
        this.counterNumberChange.emit(this.counter);
    }

}