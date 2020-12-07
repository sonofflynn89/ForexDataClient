import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { FollowPairsComponent } from './follow-pairs/follow-pairs.component';
import { SubscriptionModalComponent } from './subscription-modal/subscription-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PairAllocationInfoModalComponent } from './pair-allocation-info-modal/pair-allocation-info-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HistoricalDataComponent,
    FollowPairsComponent,
    SubscriptionModalComponent,
    PairAllocationInfoModalComponent
  ],
  entryComponents: [
    SubscriptionModalComponent,
    PairAllocationInfoModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    GoogleChartsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
