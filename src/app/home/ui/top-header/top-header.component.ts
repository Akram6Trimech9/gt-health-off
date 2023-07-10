import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopHeaderComponent {
 @Input()  image : string = ''
 @Input()  title: string =''
}
 