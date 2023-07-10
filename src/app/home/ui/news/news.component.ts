import { Component, Input } from '@angular/core';
import { Blog } from '../../utils/models/blog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() blogs : Blog[] =[]
}
