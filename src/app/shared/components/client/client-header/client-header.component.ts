import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientHeaderComponent {

}
