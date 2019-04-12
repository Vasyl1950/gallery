import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { ImageService } from './image/shared/image.service';
import { ImageDetailComponent } from './image/image-detail.component';
import { routes } from './app-routing.module';
import { KapTableComponent } from './kap-table/kap-table.component';
import { UsersService } from './kap-table/shared1/users.service';
import { NgbdModalKap } from './modal-kap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    ContactComponent,
    PriceComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    KapTableComponent,
    NgbdModalKap
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
       // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDHJyUqsrz-sBCRxwAkIeWaEqbAJJF8Ebg' }),
      NgbModule.forRoot(),
    BrowserAnimationsModule
    ],
   providers: [
    ImageService,
    ImageFilterPipe,
    UsersService
    ],
   bootstrap: [AppComponent]
})
export class AppModule { }
