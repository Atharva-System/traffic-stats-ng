import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { FiltersComponent } from './components/filters/filters.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { ReferrersComponent } from './components/referrers/referrers.component';
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';
import { DevicesComponent } from './components/devices/devices.component';
import { BrowsersComponent } from './components/browsers/browsers.component';
import { EntryPagesComponent } from './components/entry-pages/entry-pages.component';
import { NetworksComponent } from './components/networks/networks.component';
import { IpAddressesComponent } from './components/ip-addresses/ip-addresses.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateRangeComponent } from './utils/date-range/date-range.component';
import { SiteSelectorComponent } from './utils/site-selector/site-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    StatsCardsComponent,
    FiltersComponent,
    KeywordsComponent,
    ReferrersComponent,
    CountriesComponent,
    StatesComponent,
    DevicesComponent,
    BrowsersComponent,
    EntryPagesComponent,
    NetworksComponent,
    IpAddressesComponent,
    FooterComponent,
    DateRangeComponent,
    SiteSelectorComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
