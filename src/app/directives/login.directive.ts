import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bcpLoading]',
})
export class LoadingDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
