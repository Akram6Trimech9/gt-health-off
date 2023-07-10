import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-icon',
  template: `
    <div class="message-icon" (click)="openChat()">
      <i class="fa fa-comments"></i>
    </div>
    <div class="chat-window" *ngIf="chatOpen">
      <h2>Chat Bot</h2>
      <div class="chat-messages">
      <div  *ngFor="let message of messages">
      <div class="message received">
        {{ message }}
      </div>
    </div>
      </div>
      <input type="text" [(ngModel)]="currentMessage" placeholder="Type your message...">
      <button (click)="sendMessage()">Send</button>
    </div>
  `,
  styles: [`
  .message-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #0084ff; /* Facebook blue */
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .chat-window {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: white;
    color: black;
    border-radius: 10px;
    width: 320px; 
    height: 500px;  
    overflow-y: scroll;
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; /* use Facebook's font */
  }
  
  .chat-window h2 {
    margin-top:10px;
    font-size: 16px; 
    font-weight: bold;
    padding: 10px;
    background-color: #f5f6f7; 
    border-radius: 10px 10px 0 0;  
  }
  
  .chat-messages {
    height: 350px ;
    margin-bottom: 10px;
  }
  
  .message {
    background-color: #f5f6f7; 
    color: black;
    border-radius: 20px; 
    padding: 10px 15px;  
    margin-bottom: 10px;
    font-size: 14px; 
    max-width: 80%;  
    word-wrap: break-word;  
    display: inline-block; 
  }
  
  .message.sent {
    background-color: #0084ff; 
    color: white;
    margin-left: auto;  
  }
  
  .message.received {
    background-color: #f5f6f7; 
    color: black;
    margin-right: auto; 
  }
  
  input[type="text"] {
    width: 73%;   
    margin-bottom: 10px ;
    padding: 10px;  
    font-size: 14px;  
    border: none;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }
  
  button {
    background-color: #0084ff;  
    color: white;
    border: none;
    border-radius: 20px; 
    padding: 10px 20px;  
    cursor: pointer;
    font-size: 14px; 
    box-shadow:
  }
  `]
})
export class ChatComponent {
  chatOpen = false;
  messages: string[] = [];
  currentMessage = '';

  openChat() {
    this.chatOpen = !this.chatOpen
  }

  closeChat() {
    this.chatOpen = false;
  }

  sendMessage() {
    if (this.currentMessage) {
      this.messages.push(this.currentMessage);
      this.currentMessage = '';
    }
  }
}
