import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AgencyService } from './../../services/agencies.services';
import { IAgency } from './../../interfaces/IAgency';

import { Presenter } from './presenter/form.presenter';

@Component({
  selector: 'bcp-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss'],
  providers: [Presenter],
})
export class AgencyDetailComponent implements OnInit {
  Agency: IAgency;
  id: string;

  lat: number;
  lon: number;

  constructor(
    public presenter: Presenter,
    public agencyService: AgencyService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.Agency = this.getAgency(id);
      this.setMap();
    } else {
      this.router.navigate(['/list']);
    }
  }

  ngOnInit(): void {
    this.presenter.setForm(this.Agency);
  }

  setMap(): void {
    this.lat = this.Agency.lat;
    this.lon = this.Agency.lon;
  }

  onSubmit(): void {
    this.agencyService.save(this.id, this.presenter.toJsonForm());
    this.router.navigate(['/list']);
  }

  getAgency(id: string): IAgency {
    return this.agencyService.get(id);
  }
}
