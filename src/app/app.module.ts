import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { VisitorHistoryComponent } from './visitor-history/visitor-history.component';
import { VisitorEntryComponent, VisitorDialogComponent } from './visitor-entry/visitor-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { VmsService } from './vms.service';
import { MatDialog } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthServices } from './auth-services';
import { AuthGaurd } from './auth-gaurd.service';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login' , component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGaurd],
    children: [{path: 'visitorEntry', component: VisitorEntryComponent},
    {path: 'visitorHistory', component: VisitorHistoryComponent}]},

  ];
@NgModule({
  declarations: [
    VisitorDialogComponent,
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    VisitorHistoryComponent,
    VisitorEntryComponent
  ],
  imports: [
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [VmsService, AuthGaurd, AuthServices, MatDialog, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
    entryComponents: [
      VisitorDialogComponent
    ]
})
export class AppModule { }

