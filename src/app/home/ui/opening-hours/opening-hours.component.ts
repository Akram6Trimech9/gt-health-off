import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Horraire } from '../../utils/models';
import { AccPageService } from '../../data-access/acc-page.service';
import { AgencyInfo } from '../../utils/models/agency-info';

@Component({
  selector: 'app-opp',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('.60s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
    ]),
  ],
 })
export class OpeningHoursComponent implements OnInit {
  @Input() horraire!: Horraire;
  @Input()  info !: AgencyInfo
  horraireDB !: Horraire

  openingHours = {
    startTime: '',
    endTime: '',
    startDayName: '',
    endDayName: '',
    startWkDay: '',
    endWkDay: ''
  };

  constructor(private homeService: AccPageService) {}

  ngOnInit(): void {
    this.gethorraire();
  }

  gethorraire(): void {
    this.homeService.getHorraire().subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.horraireDB = res[0];
          this.calculateOpeningHours();
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  calculateOpeningHours(): void {
    this.openingHours = {
      startTime: this.horraireDB.date_hours_deb.substr(0, 5),
      endTime: this.horraireDB.date_hours_fin.substr(0, 5),
      startDayName: new Date(this.horraireDB.date_deb).toLocaleDateString('fr-FR', { weekday: 'long' }),
      endDayName: new Date(this.horraireDB.date_fin).toLocaleDateString('fr-FR', { weekday: 'long' }),
      startWkDay: new Date(this.horraireDB.weeknd_deb).toLocaleDateString('fr-FR', { weekday: 'long' }),
      endWkDay: new Date(this.horraireDB.weeknd_fin).toLocaleDateString('fr-FR', { weekday: 'long' }),
    };
  }


}
