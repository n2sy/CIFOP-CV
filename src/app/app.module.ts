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
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { InfosComponent } from './infos/infos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServeursComponent } from './serveurs/serveurs.component';
import { DetailServeurComponent } from './serveurs/detail-serveur/detail-serveur.component';
import { EditServeurComponent } from './serveurs/edit-serveur/edit-serveur.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { loginInterceptorProvider } from './login.interceptor';
import { SearchComponent } from './search/search.component';
import { RhManagerComponent } from './rh-manager/rh-manager.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


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
    HomeComponent,
    NavbarComponent,
    AddComponent,
    UpdateComponent,
    InfosComponent,
    NotFoundComponent,
    ServeursComponent,
    DetailServeurComponent,
    EditServeurComponent,
    LoginComponent,
    HttpTestComponent,
    SearchComponent,
    RhManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GTEC_ROUTING,
    HttpClientModule,
    DragDropModule
  ],
  providers: [loginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
