import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IDControl } from './controls/id.control';
import { AgenciaControl } from './controls/agencia.control';
import { DireccionControl } from './controls/direccion.control';
import { DepartamentoControl } from './controls/departamento.control';
import { ProvinciaControl } from './controls/provincia.control';
import { DistritoControl } from './controls/distrito.control';
import { LatitudControl } from './controls/lat.control';
import { LongitudControl } from './controls/lon.control';
import { IAgency } from './../../../interfaces/IAgency';

@Injectable()
export class Presenter {
  protected _form: FormGroup;
  protected _id = new IDControl();
  protected _agencia = new AgenciaControl();
  protected _departamento = new DepartamentoControl();
  protected _provincia = new ProvinciaControl();
  protected _distrito = new DistritoControl();
  protected _direccion = new DireccionControl();
  protected _lat = new LatitudControl();
  protected _lon = new LongitudControl();

  constructor() {
    this._form = new FormGroup({
      id: this._id,
      agencia: this._agencia,
      departamento: this._departamento,
      provincia: this._provincia,
      distrito: this._distrito,
      direccion: this._direccion,
      lat: this._lat,
      lon: this._lon,
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  get id(): IDControl {
    return this._id;
  }

  get agencia(): AgenciaControl {
    return this._agencia;
  }

  get departamento(): DepartamentoControl {
    return this._departamento;
  }

  get provincia(): ProvinciaControl {
    return this._provincia;
  }

  get distrito(): DistritoControl {
    return this._distrito;
  }

  get direccion(): DireccionControl {
    return this._direccion;
  }

  get lat(): LatitudControl {
    return this._lat;
  }

  get lon(): LongitudControl {
    return this._lon;
  }

  setForm(form: IAgency): void {
    this.form.setValue(form);
  }

  toJsonForm(): IAgency {
    return {
      id: this.id.value,
      agencia: this.agencia.value,
      departamento: this.departamento.value,
      provincia: this.provincia.value,
      direccion: this.direccion.value,
      distrito: this.distrito.value,
      lat: this.lat.value,
      lon: this.lon.value,
    };
  }
}
