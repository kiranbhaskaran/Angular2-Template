import {Component, OnChanges, Input,
    Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ci-star',
    templateUrl: 'app/shared/directives/star.component.html',
    styleUrls: ['app/shared/directives/star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}