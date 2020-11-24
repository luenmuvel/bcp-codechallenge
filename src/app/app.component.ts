import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingDirective } from './directives/login.directive';

@Component({
  selector: 'bcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'BCPChallenge';
  @ViewChild(LoadingDirective) public bcpLoading: LoadingDirective;

  constructor(
    private componenteFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.showLoading();
  }

  showLoading(): void {
    const componentFactory = this.componenteFactoryResolver.resolveComponentFactory(
      LoadingComponent
    );
    const viewContainerRef = this.bcpLoading.viewContainerRef;
    this.removeLoading(viewContainerRef);
    viewContainerRef.createComponent(componentFactory);

    setTimeout(() => {
      this.removeLoading(viewContainerRef);
      if (this.router.url === '/') {
        this.router.navigate(['/list']);
      }
    }, 2000);
  }

  removeLoading(viewContainerRef: ViewContainerRef): void {
    viewContainerRef.clear();
  }
}
