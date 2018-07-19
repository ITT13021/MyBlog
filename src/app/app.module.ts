import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {AlertModule, CarouselConfig, CarouselModule} from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        PostDetailComponent,
        HomeComponent
    ],
    imports: [
        AlertModule.forRoot(),
        CarouselModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserModule,
        AppRoutingModule
    ],
    providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true, showIndicators: true}}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
