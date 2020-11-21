import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { NoImagePipe } from './no-image.pipe';
import { ServersComponent } from './servers/servers.component';
import { ManagerServersComponent } from './manager-servers/manager-servers.component';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { ListPersonneService } from './list-personne.service';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { GTEC_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CardComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MsWordComponent,
    CustomDirDirective,
    NoImagePipe,
    ServersComponent,
    ManagerServersComponent,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GTEC_ROUTING
  ],
  providers: [ListPersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
