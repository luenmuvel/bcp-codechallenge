import { Validators, FormControl } from '@angular/forms';

export class LatitudControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, LatitudControl.valid);
  }
}
