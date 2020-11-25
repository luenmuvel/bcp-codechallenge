import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { RoutingModule } from './app.route.module';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgencyDetailComponent } from './components/agency-detail/agency-detail.component';
import { AgencyService } from './services/agencies.services';

import { LoadingDirective } from './directives/login.directive';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesListComponent,
    AgencyDetailComponent,
    LoadingComponent,
    LoadingDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  providers: [AgencyService],
  entryComponents: [LoadingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
