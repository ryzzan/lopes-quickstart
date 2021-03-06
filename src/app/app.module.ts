import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/** My modules */
import { SharedModule } from './modules/shared/shared.module';

/** Utils */
import { MyErrorHandler } from './utils/error-handler';

/** Components */
import { AppComponent } from './app.component';
import { GenericAnalyticReportComponent } from './components/generic-analytic-report/generic-analytic-report.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { RemoveConfirmationDialogComponent } from './components/remove-confirmation-dialog/remove-confirmation-dialog.component';

import { AuthenticationGuard } from './guards/authentication.guard';

/**
 * Pipes
 */
import { ObjectArrayToStringPipe } from './pipes/object-array-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenericAnalyticReportComponent,
    LogoutConfirmationDialogComponent,
    ObjectArrayToStringPipe,
    RemoveConfirmationDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthenticationGuard,
    MyErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }