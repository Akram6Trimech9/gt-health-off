import { Component, Input } from '@angular/core';
import { Comment } from '../../utils/models/comment';

@Component({
  selector: 'app-pacients-comments',
  templateUrl: './pacients-comments.component.html',
  styleUrls: ['./pacients-comments.component.css']
})
export class PacientsCommentsComponent {
 @Input()  comments : Comment[] =[]
 getStars(rating: number): number[] {
  return Array(rating).fill(0);
}

 }
