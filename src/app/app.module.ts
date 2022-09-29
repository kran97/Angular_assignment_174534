import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DataServiceService } from './services/data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BasicHighlightDirective } from './directives/basic-directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-directive/better-highlight.directive';
import { UnlessDirective } from './directives/structure-directive/unless.directive';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './authGuard/auth.guard';
import { AppConfig, APP_CONFIG } from './services/config.token';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService,
    AuthService,
    AuthGuard,
    {
      provide: DataServiceService,
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.experimentalEnabled ? new DataServiceService(http, config) : new AuthService();
      },
      deps: [APP_CONFIG, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
