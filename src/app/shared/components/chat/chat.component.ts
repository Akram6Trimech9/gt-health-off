import { Component } from '@angular/core';
import { ChatService } from 'src/app/home/data-access/chat.service';

@Component({
  selector: 'app-chat-icon',
  template: `
  <div class="chat-icon" (click)="openChat()">
  <img src="assets/images/logo1.png" alt="Chat Logo" class="chat-logo"> 
  <mat-icon>chat</mat-icon>
</div>

<div *ngIf="chatOpen" class="chat-container">
  <div class="header">
    <img src="assets/images/logo1.png" alt="Chat Logo" class="chat-header-logo">
    <h2>GT HEALTH CHAT</h2>
    <mat-icon class="close-icon" (click)="chatOpen = false">close</mat-icon>
  </div>
  <mat-divider></mat-divider>
  <div class="chat-messages">
  <div *ngFor="let message of messages" class="message" [ngClass]="{'user': message.sender === 'User', 'bot': message.sender === 'Bot'}">
  {{ message.content }}
</div>

  </div>
  <div class="chat-input-section">
    <mat-form-field class="chat-input">
      <input matInput [(ngModel)]="currentMessage" placeholder="Type your message...">
    </mat-form-field>
    <button mat-icon-button (click)="sendMessage()">
      <mat-icon>send</mat-icon>
    </button>
  </div>
</div>

  `,
  styles: [`

  .chat-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #18a3eb;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   }
  
  .chat-logo {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
   
  .chat-header-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .chat-container {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 320px;
    background-color: #ffffff;
    height: 600px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }
  
  .chat-messages {
    padding:30px 0 ;
    overflow-y: scroll;
    
    max-height: 500px;
    margin-bottom: 10px;
  }
  
  .message {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    border-radius: 12px;
    margin: 5px;
}

.message.user {
  background-color: #18a3eb; 
  color: white;
  align-self: flex-end;
}
  
.message.bot {
  background-color: #f3f3f3;
  color: black;
  align-self: flex-start;
}

  .header {
    display: flex;
    align-items: center;
    background-color: #18a3eb;
    color: white;
    padding: 10px;
    justify-content: space-between;
  }
  
  .close-icon {
    cursor: pointer;
    margin-left: auto;
    color: white;
  }
  
  .chat-input-section {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #f5f5f5;
  }
  
  .chat-input {
    flex-grow: 1;
    margin-right: 10px;
  }
  
  .chat-messages {
    overflow-y: scroll;
    max-height: calc(500px - 90px);  /* Adjusting for header and input space */
    margin-bottom: 10px;
  }
  
  `]
})
export class ChatComponent {
  chatOpen = false;
  messages: { sender: string, content: string }[] = [
    { sender: 'Bot', content: "Here are some things you can ask about:" },
    { sender: 'Bot', content: "- Tell me about headaches." },
    { sender: 'Bot', content: "- I have a fever." },
    { sender: 'Bot', content: "- Pain management tips." }
  ];
  currentMessage = '';

  constructor(private chatService: ChatService) {}

  openChat() {
    this.chatOpen = !this.chatOpen;
  }
  sendMessage() {
    if (this.currentMessage.trim()) {
      this.messages.push({ sender: 'User', content: this.currentMessage });
      
      setTimeout(() => {
        const recommendation = this.getRecommendation(this.currentMessage);
        this.messages.push({ sender: 'Bot', content: recommendation });
      }, 2000);  
      
      this.currentMessage = '';
    }
  }
  
  getRecommendation(message: string): string {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("headache")) {
      return "Have you taken any pain relievers?";
    } 
    if (lowerMsg.includes("fever")) {
      return "Are you experiencing any chills or sweats?";
    }
    if (lowerMsg.includes("pain")) {
      return "On a scale of 1-10, how would you rate the pain?";
    }
     
    return "Can you provide more details?";
  }
  
  isRecommendation(message: { sender: string, content: string }): boolean {
    return message.sender === 'Bot';
  }
  
}
