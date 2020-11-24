import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AgencyService } from './../../services/agencies.services';
import { IAgency } from './../../interfaces/IAgency';

@Component({
  selector: 'bcp-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss'],
})
export class AgencyDetailComponent implements OnInit {
  Agency: IAgency;
  id: string;

  lat: number;
  lon: number;

  form = new FormGroup({
    id: new FormControl(''),
    agencia: new FormControl(''),
    direccion: new FormControl(''),
    distrito: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
  });

  constructor(
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
    this.form.controls['id'].setValue(this.Agency.id);
    this.form.controls['agencia'].setValue(this.Agency.agencia);
    this.form.controls['direccion'].setValue(this.Agency.direccion);
    this.form.controls['distrito'].setValue(this.Agency.distrito);
    this.form.controls['lat'].setValue(this.Agency.lat);
    this.form.controls['lon'].setValue(this.Agency.lon);
  }

  setMap(): void {
    this.lat = this.Agency.lat;
    this.lon = this.Agency.lon;
  }

  onSubmit(): void {
    this.agencyService.save(this.id, this.form.value);
    this.router.navigate(['/list']);
  }

  getAgency(id: string): IAgency {
    return this.agencyService.get(id);
  }
}
