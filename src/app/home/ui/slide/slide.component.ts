import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Slider } from '../../utils/models';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
animations: [
    trigger('hover', [
      state('initial', style({
        transform: 'scale(1)',
        boxShadow: 'none'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
      })),
      transition('initial => hovered', animate('200ms ease-in')),
      transition('hovered => initial', animate('200ms ease-out'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent  implements OnInit{
 @Input() slider : any

  state = 'initial';

  constructor() { }

  ngOnInit(): void {
    this.state = 'hovered';
    setTimeout(() => {
      this.state = 'initial';
    }, 2000);
  }

  onHover() {
    this.state = this.state === 'initial' ? 'hovered' : 'initial';
  }
  c = 90;

  draw() {
    document.documentElement.style.setProperty('--direction', this.c++ + 'deg');
    requestAnimationFrame(() => this.draw());
  }

  ngAfterViewInit() {
    this.draw();
  }
}
