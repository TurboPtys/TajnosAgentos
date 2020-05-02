import { Component, OnInit } from '@angular/core';
import { CardCodeData } from './card-code-data.model';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-codenames-page',
  templateUrl: './codenames-page.component.html',
  styleUrls: ['./codenames-page.component.scss']
})
export class CodenamesPageComponent implements OnInit {
  isSpeaker = false;
  redCounter: number;
  blueCounter: number;

  constRowIndex: number[];

  cardsCode: CardCodeData[];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {

    this.webSocketService.getBoard().subscribe(data => {
      this.cardsCode = data.board;
      this.redCounter = data.redCounter;
      this.blueCounter = data.blueCounter;
    });
  }

  newBoard() {
    this.webSocketService.getNewBoard();
  }

  check(index: number) {
    if (!this.cardsCode[index].isSelected) {
      this.webSocketService.checkCard(index);
    }
  }

  changeRole() {
    this.isSpeaker = !this.isSpeaker;
  }
}
