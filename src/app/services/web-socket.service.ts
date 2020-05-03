import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private url = 'https://dubidu.azurewebsites.net/';
  private socket;
  isLoading$ = new Subject<boolean>();

  constructor() {
    this.socket = io(this.url);
  }

  public getNewBoard = () => {
    this.isLoading$.next(true);
    this.socket.emit('new-board');
  }

  public checkCard(index) {
    this.socket.emit('check-card', index);
  }

  public getBoard = () => {
    return new Observable<any>((observer) => {
      this.socket.on('board', (data) => {
        console.log(data);
        observer.next(data);
        this.isLoading$.next(false);
      });
    });
  }
}
