import { Injectable } from '@angular/core';
import agenciesjson from './../data/agencias.json';
import { v4 as uuidv4 } from 'uuid';
import { IAgency } from '../interfaces/IAgency';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  agencies: IAgency[] = agenciesjson;

  constructor() {
    const localAgencies = this.addAgencyID();
    this.saveLocalStorage(localAgencies);
  }

  addAgencyID(): IAgency[] {
    let localAgencies = null;
    if (!localStorage.getItem('agencies')) {
      localAgencies = this.agencies.map((agency) => {
        const id = uuidv4();
        const newAgency = agency;
        newAgency['id'] = id;
        return agency;
      });
    } else {
      localAgencies = this.getAgencies();
    }
    return localAgencies;
  }

  saveLocalStorage(agencies: IAgency[]): void {
    localStorage.setItem('agencies', JSON.stringify(agencies));
  }

  getAgencies(): IAgency[] {
    const agencies = localStorage.getItem('agencies');
    return agencies ? JSON.parse(agencies) : [];
  }

  get(id: string): IAgency {
    const agencies = this.getAgencies();
    return agencies.filter((agency: IAgency) => agency.id === id)[0];
  }

  save(id: string, payload: IAgency): void {
    const agencies = this.getAgencies();
    const index = agencies.findIndex((agency) => agency.id === id);
    agencies[index] = payload;
    this.saveLocalStorage(agencies);
  }
}
