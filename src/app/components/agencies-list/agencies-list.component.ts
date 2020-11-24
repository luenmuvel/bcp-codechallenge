import { Component } from '@angular/core';
import { AgencyService } from './../../services/agencies.services';
import { Router } from '@angular/router';
import { IAgency } from './../../interfaces/IAgency';

@Component({
  selector: 'bcp-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss'],
})
export class AgenciesListComponent {
  agencies: IAgency[] = [];
  constructor(private agencyService: AgencyService, private router: Router) {
    this.agencies = agencyService.getAgencies();
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
