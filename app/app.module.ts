import {NgModule, APP_INITIALIZER, Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {CoreModule} from 'app/core/core.module';
import {SharedModule} from 'app/shared/modules/shared.module';
import {AppComponent} from 'app/app.component';
import {WelcomeComponent} from 'app/features/home/welcome.component';
import {ProductModule} from 'app/features/product/product.module';
import {AppRoutingModule} from 'app/app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CoreModule, ProductModule, AppRoutingModule,SharedModule],
    declarations: [AppComponent, WelcomeComponent],
    providers: [CookieService],    
    bootstrap: [AppComponent]    
})
export class AppModule {

}