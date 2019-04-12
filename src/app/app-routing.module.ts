import { Routes} from '@angular/router'
import { HomeComponent} from './home/home.component'
import { PageComponent} from './page/page.component'
import { PriceComponent} from './price/price.component'
import { ContactComponent} from './contact/contact.component'
import { KapTableComponent} from './kap-table/kap-table.component'
import { GalleryComponent} from './gallery/gallery.component'
import { ImageDetailComponent } from './image/image-detail.component'
import { NavbarComponent} from './navbar/navbar.component'

 export const routes: Routes = [

      {path: "" , component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'navbar', component: NavbarComponent},
      {path: 'page', component: PageComponent},
      {path: 'price', component: PriceComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'kap-table', component: KapTableComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'image/:id', component: ImageDetailComponent },
      {path: "", redirectTo: "/gallery", pathMatch: 'full' },
    
];
