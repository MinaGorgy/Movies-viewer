import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardImgSrc: string;
  @Input() cardText: string;
  @Input() cardKey: string | number;
  @Input() trimText: boolean;
  @Input() maxTextLength: number;
  @Input() hasImageOnly: boolean;

  @Output() cardClicked = new EventEmitter<string | number>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.cardClicked.emit(this.cardKey);
  }

}
